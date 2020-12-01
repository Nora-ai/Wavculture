class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :instagram
      t.string :linktree
      t.string :image
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
