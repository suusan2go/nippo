# frozen_string_literal: true
class DiaryEntrySerializer < ApplicationSerializer
  property(:id)
  property(:title)
  property(:body)
  property(:user, properties: { id: {}, name: {}, avatar_url: {} })

  delegate :id, :title, :body, to: :model
  delegate :user, to: :model, prefix: :diary

  def user
    { id: diary_user.id, name: diary_user.name, avatar_url: diary_user.avatar_url }
  end
end
