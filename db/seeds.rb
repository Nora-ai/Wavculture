# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#destroy in the reverse order, use this when running into errors seeding the data

Genre.destroy_all
User.destroy_all

#adding a ! after create is great for developement when trying to decipher errors

@admin = User.create(username: 'admin', email: 'admin@email.com', password: 'admin1')
puts "#{User.count} users created"

@ambient = Genre.create(name: "ambient")
@classical = Genre.create(name: "classical")
@country = Genre.create(name: "country")
@dance = Genre.create(name: "dance")
@electronic = Genre.create(name: "electronic")
@folk = Genre.create(name: "folk")
@hip_hop_and_rap = Genre.create(name: "hip hop & rap")
@jazz_and_blues = Genre.create(name: "jazz and blues")
@latin = Genre.create(name: "latin")
@metal = Genre.create(name: "metal")
@pop = Genre.create(name: "pop")
@rb_and_soul = Genre.create(name: "R&B and soul")
@reggae = Genre.create(name: "reggae")
@rock = Genre.create(name: "rock")
@world = Genre.create(name: "world")
@experimental = Genre.create(name: "experimental")
@psychadelic = Genre.create(name: "psychadelic")
@indie = Genre.create(name: "indie")
@reggaeton = Genre.create(name: "reggaeton")
@k_pop = Genre.create(name: "k-pop")
@other = Genre.create(name: "other")
puts "#{Genre.count} genres created"