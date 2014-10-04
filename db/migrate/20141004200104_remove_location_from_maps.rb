class RemoveLocationFromMaps < ActiveRecord::Migration
  def change
    remove_column :maps, :location, :string
  end
end
