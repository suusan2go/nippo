# frozen_string_literal: true
class FamilySubdomain
  BLACK_LIST_DOMAINS = %w(admin api).freeze

  def matches?(request)
    !request.subdomain.in?(black_list_domains)
  end

  private

  def black_list_domains
    BLACK_LIST_DOMAINS
  end
end
