# frozen_string_literal: true
class Api::DiaryEntriesController < Api::ApplicationController
  def index
    @diary_entries = DiaryEntry.all.order(id: :desc)
    render_json(props: DiaryEntriesSerializer.new(model: @diary_entries))
  end

  def create
    @diary_entry = current_user.diary_entries.build(diary_entry_params)
    if @diary_entry.save
      render_json(props: DiaryEntrySerializer.new(model: @diary_entry))
    else
      render_json(props: { errors: @diary_entry.errors.full_messages }, status: :bad_request)
    end
  end

  def update; end

  private

  def diary_entry_params
    params.require(:diary_entry).permit(:title, :body)
  end
end
