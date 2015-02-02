class CreateMulticollections < ActiveRecord::Migration
  def change
    create_table :multicollections do |t|
      t.integer :litographer_id
      t.integer :multistory_id

      t.timestamps
    end
  end
end
