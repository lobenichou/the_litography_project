RailsAdmin.config do |config|

   config.main_app_name = ["The Litography Project"]
  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :admin
  end
  config.current_user_method(&:current_admin)

  config.model 'Map' do
    visible false
  end
  config.model 'Event' do
    visible false
  end
  config.model 'Asset' do
    visible false
  end
   config.model 'Image' do
    visible false
  end

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app
  end
end
