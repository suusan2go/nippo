# frozen_string_literal: true
class Api::ApplicationController < ApplicationController
  protect_from_forgery with: :null_session

  private

  def common_props
    {
      currentUser: current_user,
      locationPath: request.path
    }
  end

  def render_json(props:, status: :ok)
    render json: common_props.merge(props.as_json), status: status
  end
end
