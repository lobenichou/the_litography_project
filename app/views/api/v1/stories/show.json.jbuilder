json.(@story, :title, :text, :type, :published, :published_at, :id)

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
