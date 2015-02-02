class AddAddressToStories < ActiveRecord::Migration
  def change
    add_column :stories, :address, :string
  end
end
