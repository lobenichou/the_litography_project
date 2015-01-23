json.authors @authors do |author|
  json.first_name author.first_name
  json.last_name author.last_name
  json.id author.id
  json.book_report author.book_report
  json.avatar author.avatar
  json.med_logo_url author.avatar.url(:thumb)
end