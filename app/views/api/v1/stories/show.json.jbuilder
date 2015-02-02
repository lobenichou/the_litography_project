json.(@story, :title, :headline, :litographers, :feature_image, :has_header, :text, :published, :latitude, :longitude, :audio, :published_at, :visual, :audio, :writing, :multimedia, :id)


json.litographers @story.litographers do |l|
  json.thumb_avatar l.avatar.url(:thumb)
  json.name l.name
  json.bio l.bio
  json.id l.id
end