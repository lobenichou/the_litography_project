class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.string :avatar

      t.timestamps
    end
  end
end
