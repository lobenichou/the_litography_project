class CreateParts < ActiveRecord::Migration
  def change
    create_table :parts do |t|
      t.string :audio
      t.integer :part_number
      t.string :address
      t.float :latitude
      t.float :longitude
      t.string :part_name

      t.timestamps
    end
  end
end
