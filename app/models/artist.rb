class Artist < ApplicationRecord
  has_and_belongs_to_many :genres
  has_many :posts
  has_many :comments
end
