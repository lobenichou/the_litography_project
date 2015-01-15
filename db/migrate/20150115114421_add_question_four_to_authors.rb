class AddQuestionFourToAuthors < ActiveRecord::Migration
  def change
    add_column :authors, :question_four, :string
  end
end
