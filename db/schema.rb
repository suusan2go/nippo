# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170223002417) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "diary_entries", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_diary_entries_on_user_id", using: :btree
  end

  create_table "families", force: :cascade do |t|
    t.string   "slug",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_families_on_slug", unique: true, using: :btree
  end

  create_table "family_memberships", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "family_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["family_id"], name: "index_family_memberships_on_family_id", unique: true, using: :btree
    t.index ["user_id", "family_id"], name: "index_family_memberships_on_user_id_and_family_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_family_memberships_on_user_id", unique: true, using: :btree
  end

  create_table "user_social_profiles", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.string   "provider",      null: false
    t.string   "uid",           null: false
    t.string   "access_token"
    t.string   "access_secret"
    t.string   "name"
    t.string   "nickname"
    t.string   "email"
    t.string   "description"
    t.string   "image_url"
    t.json     "omniauth_dump"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["provider", "uid"], name: "index_user_social_profiles_on_provider_and_uid", unique: true, using: :btree
    t.index ["user_id"], name: "index_user_social_profiles_on_user_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "email",      null: false
    t.string   "avatar_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

  add_foreign_key "diary_entries", "users"
  add_foreign_key "family_memberships", "families"
  add_foreign_key "family_memberships", "users"
  add_foreign_key "user_social_profiles", "users"
end
