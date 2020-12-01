require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  test "should get index" do
    get posts_url, as: :json
    assert_response :success
  end

  test "should create post" do
    assert_difference('Post.count') do
      post posts_url, params: { post: { artist_id: @post.artist_id, day_in_month_end: @post.day_in_month_end, day_in_month_start: @post.day_in_month_start, day_of_week_end: @post.day_of_week_end, day_of_week_start: @post.day_of_week_start, festival: @post.festival, genre_id: @post.genre_id, image: @post.image, like_id: @post.like_id, link: @post.link, live: @post.live, location: @post.location, month_end: @post.month_end, month_start: @post.month_start, name: @post.name, recurring: @post.recurring, time_end_utc: @post.time_end_utc, time_start_utc: @post.time_start_utc, user_id: @post.user_id, year_end: @post.year_end, year_start: @post.year_start } }, as: :json
    end

    assert_response 201
  end

  test "should show post" do
    get post_url(@post), as: :json
    assert_response :success
  end

  test "should update post" do
    patch post_url(@post), params: { post: { artist_id: @post.artist_id, day_in_month_end: @post.day_in_month_end, day_in_month_start: @post.day_in_month_start, day_of_week_end: @post.day_of_week_end, day_of_week_start: @post.day_of_week_start, festival: @post.festival, genre_id: @post.genre_id, image: @post.image, like_id: @post.like_id, link: @post.link, live: @post.live, location: @post.location, month_end: @post.month_end, month_start: @post.month_start, name: @post.name, recurring: @post.recurring, time_end_utc: @post.time_end_utc, time_start_utc: @post.time_start_utc, user_id: @post.user_id, year_end: @post.year_end, year_start: @post.year_start } }, as: :json
    assert_response 200
  end

  test "should destroy post" do
    assert_difference('Post.count', -1) do
      delete post_url(@post), as: :json
    end

    assert_response 204
  end
end
