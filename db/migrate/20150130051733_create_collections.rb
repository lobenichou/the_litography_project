class CreateCollections < ActiveRecord::Migration
  def change
    create_table :collections do |t|
      t.integer :story_id
      t.integer :litographer_id

      t.timestamps
    end
  end
end
