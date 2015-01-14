ActiveAdmin.register Event do
   permit_params :name, :start_time, :end_time, :location, :latitude, :longitude, :link
   active_admin_importable

   csv do
      column :name
      column :link
      column :start_time
      column :end_time
      column :location
    end

end