class Post < ApplicationRecord
  belongs_to :artist
  belongs_to :genre
  belongs_to :user
  belongs_to :like
end
