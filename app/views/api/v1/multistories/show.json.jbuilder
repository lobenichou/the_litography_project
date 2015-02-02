json.(@multistory, :title, :headline, :litographers, :feature_image, :published, :latitude, :longitude, :visual, :writing, :multimedia, :id)

json.parts @multistory.parts do |part|
  json.feature_image part.feature_image
  json.text part.text
  json.audio part.audio
  json.address part.address
  json.latitude part.latitude
  json.longitude part.longitude
  json.part_name part.part_name
  json.part_number part.part_number
  json.multistory_id part.multistory_id
  json.square_feature_image part.feature_image.url(:thumb)
end
