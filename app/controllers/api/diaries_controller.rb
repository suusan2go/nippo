# frozen_string_literal: true
class Api::DiariesController < Api::ApplicationController
  def create
    @diary = current_user.diaries.build(diary_params)
    if @diary.save
      render_json(props: @diary.as_json)
    else
      render_json(props: { errors: @diary.errors.full_messages }, status: :bad_request)
    end
  end

  def update
  end

  private

  def diary_params
    params.require(:diary).permit(:title, :body)
  end
end
