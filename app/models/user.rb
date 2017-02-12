# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  email      :string           not null
#  avatar_url :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#

class User < ApplicationRecord
  has_many :social_profiles, class_name: User::SocialProfile
  has_many :diary_entries

  class << self
    def find_or_create_from_omniauth(omniauth)
      profile = SocialProfile.find_or_initialize_from_omniauth(omniauth: omniauth)
      User.find_or_create_from_social_profile(social_profile: profile)
    end

    def find_or_create_from_social_profile(social_profile:)
      return social_profile.user if social_profile.user
      social_profile.user = User.create! do |user|
        user.name = social_profile.name
        user.email = social_profile.email
        user.avatar_url = social_profile.image_url
      end
      social_profile.save!
      social_profile.user
    end
  end
end
