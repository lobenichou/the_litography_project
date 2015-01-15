ActiveAdmin.register Author do
  permit_params :first_name, :last_name, :bio, :avatar, :book_report_link, :website, :social, :question_one, :question_two, :question_three, :question_four, :question_five

  index do
    id_column
    selectable_column
    column :first_name
    column :last_name
    column :book_report_link
    column :bio
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
      row :book_report_link
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
      f.input :book_report_link
      f.input :website
      f.input :social
      f.input :question_one
      f.input :question_two
      f.input :question_three
      f.input :question_four
      f.input :question_five
    end
    f.actions
  end
end