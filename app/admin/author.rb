ActiveAdmin.register Author do
  permit_params :first_name, :last_name, :bio, :avatar

  index do
    id_column
    selectable_column
    column :first_name
    column :last_name
    column "Avatar" do |author|
      ul do
        li do
          image_tag(author.avatar.url(:thumb))
         end
       end
    end
    actions
  end

  show do |story|
    attributes_table do
      row :first_name
      row :last_name
      row :bio
      row "Avatar" do |author|
        ul do
            li do
              image_tag(author.avatar.url(:thumb))
            end
         end
      end
    end
  end

   form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs 'Details', :multipart => true do
      f.input :first_name
      f.input :last_name
      f.input :bio
      f.input :avatar
    end
    f.actions
  end
end