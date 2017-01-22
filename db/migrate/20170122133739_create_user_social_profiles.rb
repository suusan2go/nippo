# frozen_string_literal: true
class CreateUserSocialProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :user_social_profiles do |t|
      t.references :user, foreign_key: true, null: false, index: { unique: true }
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :access_token
      t.string :access_secret
      t.string :name
      t.string :nickname
      t.string :email
      t.string :description
      t.string :image_url
      t.json :omniauth_dump

      t.timestamps
    end
    add_index :user_social_profiles, [:provider, :uid], unique: true
  end
end
