# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#destroy in the reverse order, use this when running into errors seeding the data
#User.destroy_all
#adding a ! after create is great for developement when trying to decipher errors

@admin = User.create(username: 'admin', email: 'admin@email.com', password: 'admin1')
puts "#{User.count} users created"

