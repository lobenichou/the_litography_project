class AddPublishedToMultistories < ActiveRecord::Migration
  def change
    add_column :multistories, :published, :boolean
  end
end
