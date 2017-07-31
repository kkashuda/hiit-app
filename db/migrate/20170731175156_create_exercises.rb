class CreateExercises < ActiveRecord::Migration[5.1]
  def change
    create_table :exercises do |t|
      t.references :workout, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
