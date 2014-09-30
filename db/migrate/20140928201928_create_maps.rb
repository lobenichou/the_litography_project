class CreateMaps < ActiveRecord::Migration
  def change
    create_table :maps do |t|
      t.integer :story_id
      t.integer :location_id

      t.timestamps
    end
  end
end
