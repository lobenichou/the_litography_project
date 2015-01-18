ActiveAdmin.register Asset do
 permit_params :storage, :retained_storage, :remove_storage, :storage_url
 index do
    id_column
    selectable_column
    column :storage_name
    column('Thumbnail') do |asset|
        image_tag(asset.thumb_url)
      end
    actions
  end

end
