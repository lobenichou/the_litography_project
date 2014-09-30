class AddLocationToMaps < ActiveRecord::Migration
  def change
    add_column :maps, :location, :string
  end
end
