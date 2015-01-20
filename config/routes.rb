Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admins
  # devise_for :admin
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  # creates an API url
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :stories, only: [:index, :show]
      resources :authors, only: [:index, :show]
      resources :events, only: [:index, :show]
    end
  end


  root 'application#index'
  get '*path' => 'application#index'

end
