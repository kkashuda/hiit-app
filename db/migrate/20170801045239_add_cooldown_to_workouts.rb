class AddCooldownToWorkouts < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :cooldown, :string
  end
end
