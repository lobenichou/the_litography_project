class AddLatitudeAndLongitudeToStories < ActiveRecord::Migration
  def change
    add_column :stories, :latitude, :float
    add_column :stories, :longitude, :float
  end
end
