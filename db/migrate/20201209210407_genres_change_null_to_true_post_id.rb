class GenresChangeNullToTruePostId < ActiveRecord::Migration[6.0]
  def change
    change_column_null :genres, :post_id, from: false, to: true
  end
end
