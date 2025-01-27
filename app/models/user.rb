class User < ApplicationRecord
    has_secure_password

    has_many :posts
    has_many :likes
    has_many :comments

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 6 }
    validates :password, confirmation: true 
end
