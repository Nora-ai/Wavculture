Rails.application.routes.draw do
  resources :comments
  resources :likes
  resources :genres
  resources :artists
  resources :posts
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/posts/:id/artist/:artist_id', to: 'posts#add_artist'
  # to: 'controller#method'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
