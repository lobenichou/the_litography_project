class RemoveLatitudeFromLocations < ActiveRecord::Migration
  def change
    remove_column :locations, :latitude, :string
  end
end
