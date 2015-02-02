class AddLatitudeAndLongitudeToMultistories < ActiveRecord::Migration
  def change
    add_column :multistories, :latitude, :float
    add_column :multistories, :longitude, :float
  end
end
