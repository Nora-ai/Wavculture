class Artist < ApplicationRecord
  belongs_to :genre
  belongs_to :post
  belongs_to :comment
end
