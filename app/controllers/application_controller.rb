# frozen_string_literal: true
require 'hypernova'
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  around_action :hypernova_render_support

  def sign_in(user:)
    session[:user_id] = user.id
  end
end
