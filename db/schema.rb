# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150125183227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: true do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "approved",               default: false, null: false
  end

  add_index "admins", ["email"], name: "index_admins_on_email", unique: true, using: :btree
  add_index "admins", ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true, using: :btree

  create_table "authors", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.text     "bio"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.string   "book_report_link"
    t.string   "website"
    t.string   "social"
    t.string   "question_one"
    t.string   "question_two"
    t.string   "question_three"
    t.string   "question_four"
    t.string   "question_five"
    t.string   "book_report"
  end

  create_table "ckeditor_assets", force: true do |t|
    t.string   "data_file_name",               null: false
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.integer  "assetable_id"
    t.string   "assetable_type",    limit: 30
    t.string   "type",              limit: 30
    t.integer  "width"
    t.integer  "height"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ckeditor_assets", ["assetable_type", "assetable_id"], name: "idx_ckeditor_assetable", using: :btree
  add_index "ckeditor_assets", ["assetable_type", "type", "assetable_id"], name: "idx_ckeditor_assetable_type", using: :btree

  create_table "events", force: true do |t|
    t.string   "name"
    t.datetime "start_time"
    t.datetime "end_time"
    t.string   "location"
    t.float    "latitude"
    t.float    "longitude"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "link"
  end

  create_table "images", force: true do |t|
    t.text     "caption"
    t.string   "title"
    t.integer  "story_id"
    t.string   "attribution"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
    t.integer  "attachable_id"
    t.string   "attachable_type"
  end

  create_table "litographers", force: true do |t|
    t.string   "name"
    t.text     "bio"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  create_table "locations", force: true do |t|
    t.string   "address"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude"
    t.float    "longitude"
  end

  create_table "maps", force: true do |t|
    t.integer  "story_id"
    t.integer  "location_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "stories", force: true do |t|
    t.string   "title"
    t.text     "text"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "published"
    t.datetime "published_at"
    t.string   "audio"
    t.boolean  "multimedia"
    t.boolean  "sound"
    t.boolean  "visual"
    t.boolean  "writing"
    t.string   "book_cover_file_name"
    t.string   "book_cover_content_type"
    t.integer  "book_cover_file_size"
    t.datetime "book_cover_updated_at"
    t.string   "feature_image_file_name"
    t.string   "feature_image_content_type"
    t.integer  "feature_image_file_size"
    t.datetime "feature_image_updated_at"
    t.string   "headline"
    t.boolean  "book_report"
    t.integer  "litographer_id"
    t.string   "related_author"
    t.boolean  "has_header"
  end

end
