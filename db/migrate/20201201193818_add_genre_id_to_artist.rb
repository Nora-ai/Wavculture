class AddGenreIdToArtist < ActiveRecord::Migration[6.0]
  def change
    add_reference :artists, :genre, null: false, foreign_key: true
  end
end
