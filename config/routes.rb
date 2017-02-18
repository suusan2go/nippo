# frozen_string_literal: true
Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :sessions, only: [:destroy]
    resources :diary_entries, only: [:index, :create, :update]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'root#index'

  get '/auth/:action/callback', to: 'auths#callback'

  get '*path', to: 'root#index'
end
