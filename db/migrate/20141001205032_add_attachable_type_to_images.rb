class AddAttachableTypeToImages < ActiveRecord::Migration
  def change
    add_column :images, :attachable_type, :string
  end
end
