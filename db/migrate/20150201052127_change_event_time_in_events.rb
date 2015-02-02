class ChangeEventTimeInEvents < ActiveRecord::Migration
  def change
    change_column :events, :event_time,  :string
  end
end
