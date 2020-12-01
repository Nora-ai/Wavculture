require 'test_helper'

class ArtistsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @artist = artists(:one)
  end

  test "should get index" do
    get artists_url, as: :json
    assert_response :success
  end

  test "should create artist" do
    assert_difference('Artist.count') do
      post artists_url, params: { artist: { comment_id: @artist.comment_id, genre_id: @artist.genre_id, image: @artist.image, instagram: @artist.instagram, linktree: @artist.linktree, name: @artist.name, post_id: @artist.post_id } }, as: :json
    end

    assert_response 201
  end

  test "should show artist" do
    get artist_url(@artist), as: :json
    assert_response :success
  end

  test "should update artist" do
    patch artist_url(@artist), params: { artist: { comment_id: @artist.comment_id, genre_id: @artist.genre_id, image: @artist.image, instagram: @artist.instagram, linktree: @artist.linktree, name: @artist.name, post_id: @artist.post_id } }, as: :json
    assert_response 200
  end

  test "should destroy artist" do
    assert_difference('Artist.count', -1) do
      delete artist_url(@artist), as: :json
    end

    assert_response 204
  end
end
