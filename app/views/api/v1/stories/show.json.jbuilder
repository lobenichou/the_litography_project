json.(@story, :title, :headline, :feature_image, :text, :published, :audio, :published_at, :visual, :audio, :writing, :multimedia, :book_report, :id)

json.author do |json|
  json.(@story.author, :first_name, :last_name, :avatar)
end

json.images @story.images do |image|
  json.title image.title
  json.caption image.caption
  json.attribution image.attribution
  json.file image.file.url
end

json.locations @story.maps do |map|
    json.input map.location.address
    json.latitude map.location.latitude
    json.longitude map.location.longitude
end
