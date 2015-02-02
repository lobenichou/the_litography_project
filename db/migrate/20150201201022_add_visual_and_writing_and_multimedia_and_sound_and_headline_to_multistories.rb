class AddVisualAndWritingAndMultimediaAndSoundAndHeadlineToMultistories < ActiveRecord::Migration
  def change
    add_column :multistories, :visual, :boolean
    add_column :multistories, :writing, :boolean
    add_column :multistories, :multimedia, :boolean
    add_column :multistories, :sound, :boolean
    add_column :multistories, :headline, :string
  end
end
