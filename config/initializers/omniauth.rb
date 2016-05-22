# encoding: utf-8
# frozen_string_literal: true
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2,
           Rails.application.secrets.google['client_id'],
           Rails.application.secrets.google['client_secret'], name: 'google'
end
