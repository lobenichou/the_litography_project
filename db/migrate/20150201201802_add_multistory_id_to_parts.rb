class AddMultistoryIdToParts < ActiveRecord::Migration
  def change
    add_column :parts, :multistory_id, :integer
  end
end
