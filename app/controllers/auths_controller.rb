class AuthsController < ApplicationController
  def callback
    sign_in(user: User.find_or_create_from_omniauth(omniauth: omniauth))
  end
  alias google callback

  private

  def omniauth
    @omniauth ||= request.env['omniauth.auth']
  end
end
