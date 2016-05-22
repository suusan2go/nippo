# frozen_string_literal: true
class SessionsController < ApplicationController
  skip_before_action :login_required

  def callback
    auth = request.env['omniauth.auth']
    oauth_service = OauthService.new(auth)
    if oauth_service.find_or_create_user
      session[:user_id] = oauth_service.user.id
      redirect_to root_path, notice: t('.login_secuceed')
    else
      redirect_to root_path, alert: t('.login_failed')
    end
  end
end
