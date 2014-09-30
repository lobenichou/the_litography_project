ActiveAdmin.register Map do
    permit_params :location, :story_title

  index do
    id_column
    column :location
    column :story_title
    actions
  end

end
