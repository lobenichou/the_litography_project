class AddWebsiteToAuthors < ActiveRecord::Migration
  def change
    add_column :authors, :website, :string
  end
end
