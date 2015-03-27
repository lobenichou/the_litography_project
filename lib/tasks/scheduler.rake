desc "This task delete past events every morning"
task :delete_past_events => :environment do
  puts "Deleting past events..."
  events = Event.all
  events.each do |event|
  	event_date = event.event_date.to_s
	  	if Date.parse(event_date) < Date.today
	  		event.destroy
	  		puts "#{event.name} was deleted from database"
	  	end
  	end
  puts "done."
end
