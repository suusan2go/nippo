# frozen_string_literal: true
class OauthService
  attr_reader :user

  def initialize(auth)
    @auth = auth
  end

  def find_or_create_user
    @user = find_or_initialize_user
    @user.social_profile = find_or_intialize_social_profile
    @user.save
  end

  private

  def find_or_initialize_user
    user = User.find_or_initialize_by(email: @auth.info.email)
    if user.new_record?
      user.name = @auth.extra.raw_info.name
    end
    user
  end

  def find_or_intialize_social_profile
    social_profile =
      SocialProfile.find_or_initialize_by(uid: @auth.uid,
                                          provider: @auth.provider) do |sp|
        sp.name = @auth.info.name
        sp.email = @auth.info.email
        sp.image = @auth.info.image
        sp.credentials = @auth.credentials.to_json
        sp.raw_info =  @auth.extra.raw_info.to_json
      end
    social_profile
  end
end
