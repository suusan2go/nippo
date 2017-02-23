# == Schema Information
#
# Table name: family_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  family_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_family_memberships_on_family_id              (family_id) UNIQUE
#  index_family_memberships_on_user_id                (user_id) UNIQUE
#  index_family_memberships_on_user_id_and_family_id  (user_id,family_id) UNIQUE
#
# Foreign Keys
#
#  fk_rails_818aa4a9f9  (family_id => families.id)
#  fk_rails_829cfb2ffc  (user_id => users.id)
#

class Family::Membership < ApplicationRecord
  belongs_to :user
  belongs_to :family
end
