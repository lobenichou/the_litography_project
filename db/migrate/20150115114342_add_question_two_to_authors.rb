class AddQuestionTwoToAuthors < ActiveRecord::Migration
  def change
    add_column :authors, :question_two, :string
  end
end
