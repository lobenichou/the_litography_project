ActiveAdmin.register Story do
  permit_params :title, :text, :media, :author, :location, :published, :type

  index do
    id_column
    column :title
    column :text
    column :media
    column :author
    column :location
    column :type
    actions
  end

   form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs 'Details', :multipart => true do
      f.input :type, as: :select, collection: Story.select_options
      f.input :title
      f.input :text, :as => :text
      f.input :author
      f.input :location
      f.input :published
      f.input :media
    end
    f.actions
  end

# index as: :grid do |story|
#   link_to media_tag(product.media_path), admin_story_path(story)
# end

end
