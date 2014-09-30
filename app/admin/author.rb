ActiveAdmin.register Author do
  permit_params :first_name, :last_name, :bio, :avatar

  index do
    id_column
    column :first_name
    column :last_name
    column :avatar
    actions
  end

   form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs 'Details', :multipart => true do
      f.input :first_name
      f.input :last_name
      f.input :avatar
    end
    f.actions
  end
end
