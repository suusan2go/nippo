# frozen_string_literal: true
require_relative '../lib/modules/family_subdomain.rb'
Rails.application.routes.draw do

  constraints FamilySubdomain.new do
    namespace :api, defaults: { format: :json } do
      scope module: :families do
        resources :diary_entries, only: [:index, :create, :update]
      end
    end
  end
  namespace :api, defaults: { format: :json } do
    resource :sessions, only: [:destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'root#index'

  get '/auth/:action/callback', to: 'auths#callback'

  get '*path', to: 'root#index'
end
