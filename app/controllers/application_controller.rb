# frozen_string_literal: true
require 'hypernova'
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  around_action :hypernova_render_support
  before_action :require_sign_in

  helper_method :current_user

  private

  def require_sign_in
    redirect_to root_path unless current_user
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def sign_in(user:)
    session[:user_id] = user.id
  end
end
