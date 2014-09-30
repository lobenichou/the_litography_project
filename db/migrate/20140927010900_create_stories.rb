class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title
      t.text :text
      t.string :media
      t.string :author
      t.string :location

      t.timestamps
    end
  end
end
