class RemoveLongitudeFromLocations < ActiveRecord::Migration
  def change
    remove_column :locations, :longitude, :string
  end
end
