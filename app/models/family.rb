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
  has_many :membership, class_name: Family::Membership
end
