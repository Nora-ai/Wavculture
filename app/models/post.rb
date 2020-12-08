class Post < ApplicationRecord
  belongs_to :artist
  has_and_belongs_to_many :genres
  belongs_to :user
  has_many :likes
end
