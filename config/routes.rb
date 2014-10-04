Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # root 'application#index'
  # get '*path' => 'application#index'

  # creates an API url
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :stories, only: [:index]
      # resources :locations, only: [:index]
    end
  end

end
