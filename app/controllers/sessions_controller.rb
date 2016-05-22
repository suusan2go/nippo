# frozen_string_literal: true
class SessionsController < ApplicationController
  def callback
    auth = request.env['omniauth.auth']
    oauth_service = OauthService.new(auth)
    if oauth_service.find_or_create_user
      sign_in_and_redirect oauth_service.user, event: :authentication
      redirect_to root_path, notice: t('.login_secuceed')
    else
      redirect_to root_path, alert: t('.login_failed')
    end
  end
end
