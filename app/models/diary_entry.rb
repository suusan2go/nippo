# == Schema Information
#
# Table name: diary_entries
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
#  index_diary_entries_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_41491c9ce3  (user_id => users.id)
#

class DiaryEntry < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
  validates :body, presence: true
end
