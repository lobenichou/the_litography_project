class CreateMultistories < ActiveRecord::Migration
  def change
    create_table :multistories do |t|
      t.string :title
      t.string :address

      t.timestamps
    end
  end
end
