class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :image
      t.string :location
      t.string :link
      t.boolean :festival
      t.boolean :recurring
      t.boolean :live
      t.string :day_of_week_start
      t.string :day_of_week_end
      t.integer :month_start
      t.integer :month_end
      t.integer :day_in_month_start
      t.integer :day_in_month_end
      t.integer :year_start
      t.integer :year_end
      t.integer :time_start_utc
      t.integer :time_end_utc
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
