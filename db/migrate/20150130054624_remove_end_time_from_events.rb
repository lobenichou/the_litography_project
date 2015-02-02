class RemoveEndTimeFromEvents < ActiveRecord::Migration
  def change
    remove_column :events, :end_time, :datetime
  end
end
