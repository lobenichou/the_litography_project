json.events @events do |event|
  json.name event.name
  json.link event.link
  json.date event.event_date
  json.time event.event_time
  json.venue event.venue
  json.id event.id
  json.latitude event.latitude
  json.longitude event.longitude
end