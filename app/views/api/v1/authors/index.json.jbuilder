json.authors @authors do |author|
  json.first_name author.first_name
  json.last_name author.last_name
  json.id author.id
  json.avatar author.avatar
  json.med_logo_url author.avatar.url(:thumb)
end