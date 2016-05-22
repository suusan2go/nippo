# frozen_string_literal: true
# == Schema Information
#
# Table name: social_profiles
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  provider    :string
#  uid         :string
#  name        :string
#  email       :string
#  image       :string
#  credentials :text
#  raw_info    :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_social_profiles_on_provider_and_uid  (provider,uid) UNIQUE
#  index_social_profiles_on_user_id           (user_id)
#
# Foreign Keys
#
#  fk_rails_d33f8c64b4  (user_id => users.id)
#

# frozen_string_literal: true
class SocialProfile < ApplicationRecord
  belongs_to :user
end
