class AddQuestionOneToAuthors < ActiveRecord::Migration
  def change
    add_column :authors, :question_one, :string
  end
end
