json.authors @authors do |author|
  json.name author.to_s
  json.first_name author.first_name
  json.last_name author.last_name
  json.bio author.bio
  json.avatar author.avatar
  json.id author.id
end