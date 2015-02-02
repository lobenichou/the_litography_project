class AddPublishedAtToMultistories < ActiveRecord::Migration
  def change
    add_column :multistories, :published_at, :datetime
  end
end
