class RemoveFileFromImages < ActiveRecord::Migration
  def change
    remove_column :images, :file, :string
  end
end
