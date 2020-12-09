class GenresChangeNullToTrue < ActiveRecord::Migration[6.0]
  def change
    change_column_null :genres, :artist_id, from: false, to: true
  end
end
