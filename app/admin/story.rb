ActiveAdmin.register Story do
  permit_params :title, :text, :media, :author, :location, :published, :type, :author_id,
  images_attributes: [:id, :story_id, :file, :title, :attribution, :caption]

  index do
    id_column
    column :title
    column :text
    column :author
    column :location
    column :type
    column "Images" do |s|
      ul do
        s.images.each do |img|
          li do
            image_tag(img.file.url(:thumb))
          end
        end
      end
    end
    column :published
    actions
  end


  show do |story|
    attributes_table do
      row :title
      row :text
      row :author
      row :location
      row :type
      row "Images" do
        ul do
          story.images.each do |img|
            li do
              image_tag(img.file.url(:thumb))
            end
          end
         end
      end
    end
  end

   form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs 'Details', :multipart => true do
      f.semantic_errors *f.object.errors.keys
      f.input :type, as: :select, collection: Story.select_options
      f.input :title
      f.input :text, :as => :text
      f.input :author
      f.input :location
      f.input :published
      f.inputs 'Images' do
        f.semantic_errors *f.object.errors.keys
         f.has_many :images do |p|
           hint = p.object.file.nil? ? p.template.content_tag(:span, 'No Image Yet')
                               : p.template.image_tag(p.object.file.url(:thumb))
            p.input :file,    as: :file,label: 'Image', hint: hint
            p.input :title
            p.input :attribution
            p.input :caption
            p.input :_destroy, as: :boolean, required: false, label: 'Remove image'
        end
      end
    end
    f.actions
  end

# index as: :grid do |story|
#   link_to media_tag(product.media_path), admin_story_path(story)
# end

end
