json.event @events do |event|
  json.name event.name
  json.link event.link
  json.start_time event.start_time
  json.end_time event.end_time
  json.latitude event.latitude
  json.longitude event.longitude
end