# == Schema Information
#
# Table name: diaries
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_diaries_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_f03fd03c63  (user_id => users.id)
#

class Diary < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :body, presence: true
end
