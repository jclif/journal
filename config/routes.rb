Journal::Application.routes.draw do

  root to: "posts#index"

  resources :posts, only: [:create, :index]

end
