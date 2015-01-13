ActiveAdmin.register Story do
  permit_params :title, :text, :headline, :media, :author, :location, :book_cover, :feature_image, :published, :published_at, :author_id, :audio, :sound, :writing, :multimedia, :visual,
  images_attributes: [:id, :story_id, :file, :title, :attribution, :caption, :_destroy],
  maps_attributes: [:id, :story_id, :location_id, :_destroy]

  index do
    id_column
    selectable_column
    column :title
    column :headline
    column :text
    column :author
    column :location
    column "Book Cover" do |story|
      ul do
        li do
          image_tag(story.book_cover.url(:thumb))
         end
       end
    end
    column "Featured Image" do |story|
      ul do
        li do
          image_tag(story.feature_image.url(:thumb))
         end
       end
    end
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
    column :published_at
    actions
  end


  show do |story|
    attributes_table do
      row :title
      row :text
      row :headline
      row :author
      row :audio
      row "Book Cover" do |story|
        ul do
            li do
              image_tag(story.book_cover.url(:thumb))
            end
         end
      end
      row "Featured Image" do |story|
        ul do
            li do
              image_tag(story.feature_image.url(:thumb))
            end
         end
      end
      row "Locations" do
        ul do
        story.maps.each do |map|
          li do
            map.location.lat_long
          end
        end
      end
    end
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
      f.input :title
      f.input :headline
      f.input :text, as: :wysihtml5
      f.input :author
      f.input :audio
      f.input :book_cover
      f.input :feature_image
      f.inputs "Locations" do
        f.semantic_errors *f.object.errors.keys
        f.has_many :maps do |location|
            location.input :location, :label => "Add Locations"
            location.input :_destroy, as: :boolean, required: false, label: 'Remove Location'
          end
      end

      f.input :published

      f.inputs "Elements in stories" do
        f.input :visual
        f.input :sound
        f.input :writing
        f.input :multimedia
      end

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
