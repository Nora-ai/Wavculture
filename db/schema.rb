# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_01_193844) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "instagram"
    t.string "linktree"
    t.string "image"
    t.bigint "post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "genre_id", null: false
    t.bigint "comment_id", null: false
    t.index ["comment_id"], name: "index_artists_on_comment_id"
    t.index ["genre_id"], name: "index_artists_on_genre_id"
    t.index ["post_id"], name: "index_artists_on_post_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "content"
    t.bigint "user_id", null: false
    t.bigint "artist_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_comments_on_artist_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.bigint "artist_id", null: false
    t.bigint "post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["artist_id"], name: "index_genres_on_artist_id"
    t.index ["post_id"], name: "index_genres_on_post_id"
  end

  create_table "likes", force: :cascade do |t|
    t.boolean "like"
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_likes_on_post_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "location"
    t.string "link"
    t.boolean "festival"
    t.boolean "recurring"
    t.boolean "live"
    t.string "day_of_week_start"
    t.string "day_of_week_end"
    t.integer "month_start"
    t.integer "month_end"
    t.integer "day_in_month_start"
    t.integer "day_in_month_end"
    t.integer "year_start"
    t.integer "year_end"
    t.integer "time_start_utc"
    t.integer "time_end_utc"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "artist_id"
    t.bigint "genre_id", null: false
    t.bigint "like_id", null: false
    t.index ["artist_id"], name: "index_posts_on_artist_id"
    t.index ["genre_id"], name: "index_posts_on_genre_id"
    t.index ["like_id"], name: "index_posts_on_like_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "artists", "comments"
  add_foreign_key "artists", "genres"
  add_foreign_key "artists", "posts"
  add_foreign_key "comments", "artists"
  add_foreign_key "comments", "users"
  add_foreign_key "genres", "artists"
  add_foreign_key "genres", "posts"
  add_foreign_key "likes", "posts"
  add_foreign_key "likes", "users"
  add_foreign_key "posts", "genres"
  add_foreign_key "posts", "likes"
  add_foreign_key "posts", "users"
end
