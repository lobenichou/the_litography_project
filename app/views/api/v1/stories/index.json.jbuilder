json.stories @stories do |story|
  json.title story.title
  json.text story.text
  json.latitude story.latitude
  json.longitude story.longitude
  json.litographers story.litographers
  json.headline story.headline
  json.audio story.audio
  json.published story.published
  json.published_at story.published_at
  json.id story.id
  json.book_cover story.book_cover.url
  json.feature_image story.feature_image.url
  json.square_feature_image story.feature_image.url(:thumb)
  json.sound story.sound
  json.writing story.writing
  json.multimedia story.multimedia
  json.visual story.visual
end

