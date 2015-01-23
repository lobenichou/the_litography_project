class DropAvatarsFromAuthors < ActiveRecord::Migration
  def change
    remove_column :authors, :avatar, :string
  end
end
