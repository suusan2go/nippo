# encoding: utf-8
# frozen_string_literal: true
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user
  before_action :login_required

  private

  def current_user
    @current_user ||= User.find(session[:user_id])
  rescue ActiveRecord::RecordNotFound
    nil
  end

  def login_required
    return if current_user
    redirect_to root_path, notice: 'login_required'
  end
end
