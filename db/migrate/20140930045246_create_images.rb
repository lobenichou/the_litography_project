class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.text :caption
      t.string :title
      t.integer :story_id
      t.string :attribution
      t.string :file

      t.timestamps
    end
  end
end
