json.authors @authors do |author|
  json.name author.to_s
  json.bio author.bio
  json.avatar author.avatar
  json.id author.id
end