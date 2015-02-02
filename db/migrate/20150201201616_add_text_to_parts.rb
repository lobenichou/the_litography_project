class AddTextToParts < ActiveRecord::Migration
  def change
    add_column :parts, :text, :text
  end
end
