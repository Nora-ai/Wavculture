class Genre < ApplicationRecord
  belongs_to :artist
  belongs_to :post
end
