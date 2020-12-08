class JoinArtistsAndGenres < ActiveRecord::Migration[6.0]
  def change
    create_join_table :genres, :artists
  end
end
