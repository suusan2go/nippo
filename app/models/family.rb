# == Schema Information
#
# Table name: families
#
#  id         :integer          not null, primary key
#  slug       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_families_on_slug  (slug) UNIQUE
#

class Family < ApplicationRecord
  has_many :diary_entries
  has_many :memberships, class_name: Family::Membership

  validates :slug, format: { with: /\A[a-z0-9]+\z/ }
  validates :slug, exclusion: { in: %w(admin api) }

  class << self
    def register(registerer:)
      ActiveRecord::Base.transaction do
        family = create!(slug: Family::SlugFactory.general_from_email(email: registerer.email))
        family.memberships.create!(user: registerer)
        family
      end
    end
  end
end
