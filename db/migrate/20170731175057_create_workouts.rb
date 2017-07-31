class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.string :title
      t.integer :duration
      t.integer :rest
      t.integer :interval
      t.integer :sets

      t.timestamps
    end
  end
end
