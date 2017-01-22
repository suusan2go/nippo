# frozen_string_literal: true
class RootController < ApplicationController
  skip_before_action :require_sign_in
  before_action :render_public_top_if_not_sign_in

  def index; end

  private

  def render_public_top_if_not_sign_in
    render :public unless current_user
  end
end
