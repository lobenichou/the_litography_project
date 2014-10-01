class AddAttachableIdToImages < ActiveRecord::Migration
  def change
    add_column :images, :attachable_id, :integer
  end
end
