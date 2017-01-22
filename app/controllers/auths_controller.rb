# frozen_string_literal: true
class AuthsController < ApplicationController
  skip_before_action :require_sign_in

  def callback
    sign_in(user: User.find_or_create_from_omniauth(omniauth))
    redirect_to root_path
  end
  alias google callback

  private

  def omniauth
    @omniauth ||= request.env['omniauth.auth']
  end
end
