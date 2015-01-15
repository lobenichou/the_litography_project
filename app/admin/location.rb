ActiveAdmin.register Location do
   permit_params :address, :latitude, :longitude

  index do
    id_column
    selectable_column
    column :address
    # column :latitude
    # column :longitude
    actions
  end

end