class AddSocialToAuthors < ActiveRecord::Migration
  def change
    add_column :authors, :social, :string
  end
end
