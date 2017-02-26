# frozen_string_literal: true
class FamilyRootController < ApplicationController
  before_action :rais_404, unless: :current_user
  before_action :set_family

  def index
    render 'root/index'
  end

  private

  def redirect_to_root_domain_top
    raise ActionController::RoutingError, 'render 404 for not sign in user'
  end

  def set_family
    raise ActionController::RoutingError, 'Not registered family' unless current_user.family.slug == request.subdomains.first
  end
end
