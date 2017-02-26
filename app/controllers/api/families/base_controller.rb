# frozen_string_literal: true
class Api::Families::BaseController < Api::ApplicationController
  private

  def family
    @famiy ||= Family.find_by!(slug: family_slug_name)
  end

  def family_slug_name
    request.subdomains.first
  end
end
