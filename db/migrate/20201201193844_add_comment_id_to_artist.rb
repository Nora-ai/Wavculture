class AddCommentIdToArtist < ActiveRecord::Migration[6.0]
  def change
    add_reference :artists, :comment, null: false, foreign_key: true
  end
end
