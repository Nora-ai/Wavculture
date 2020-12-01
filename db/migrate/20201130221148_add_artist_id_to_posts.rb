class AddArtistIdToPosts < ActiveRecord::Migration[6.0]
  def change
    add_reference :posts, :artist, index: true
  end
end
