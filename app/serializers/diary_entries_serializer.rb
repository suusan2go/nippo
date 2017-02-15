# frozen_string_literal: true
class DiaryEntriesSerializer < ApplicationSerializer
  property(:diary_entries)

  def diary_entries
    model.map do |m|
      DiaryEntrySerializer.new(model: m)
    end
  end
end
