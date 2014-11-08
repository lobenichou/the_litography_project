json.stories @stories do |story|
  json.title story.title
  json.text story.text
  json.type story.type
  json.published story.published
  json.created_at story.created_at

json.images story.images do |image|
  json.title image.title
  json.caption image.caption
  json.attribution image.attribution
  json.file image.file.url
end


  json.author do |json|
    json.(story.author, :first_name, :last_name, :avatar)
  end

json.locations story.maps do |map|
    json.input map.location.address
    json.latitude map.location.latitude
    json.longitude map.location.longitude
  end


end

