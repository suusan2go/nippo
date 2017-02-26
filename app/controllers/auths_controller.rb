# frozen_string_literal: true
class AuthsController < ApplicationController
  skip_before_action :require_sign_in

  def callback
    user = User.find_or_create_from_omniauth(omniauth)
    sign_in(user: user)
    if user.family
      redirect_to root_url(subdomain: user.family.slug)
    else
      redirect_to invitation_url(subdomain: Family.register(registerer: user).slug)
    end
  end
  alias google callback

  private

  def omniauth
    @omniauth ||= request.env['omniauth.auth']
  end
end
