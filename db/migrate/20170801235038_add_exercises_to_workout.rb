class AddExercisesToWorkout < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :exercises, :string
  end
end
