Rails.application.routes.draw do
  get 'home/index'

  root to: 'home#index'

  get  '/auth/:provider/callback', to:'sessions#callback'
  post '/auth/:provider/callback', to: 'sessions#callback'
  get  '/auth/failure' => 'sessions#failure'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
