class CreateLitographers < ActiveRecord::Migration
  def change
    create_table :litographers do |t|
      t.string :name
      t.text :bio

      t.timestamps
    end
  end
end
