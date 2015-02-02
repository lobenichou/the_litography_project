json.multistories @multistories do |multistory|
  json.title multistory.title
  json.latitude multistory.latitude
  json.longitude multistory.longitude
  json.litographers multistory.litographers
  json.headline multistory.headline
  json.published multistory.published
  json.published_at multistory.published_at
  json.parts multistory.parts
  json.id multistory.id
  json.book_cover multistory.book_cover.url
  json.feature_image multistory.feature_image.url
  json.square_feature_image multistory.feature_image.url(:thumb)
  json.sound multistory.sound
  json.writing multistory.writing
  json.multimedia multistory.multimedia
  json.visual multistory.visual
end

