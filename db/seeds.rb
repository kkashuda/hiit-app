# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

workout1 = Workout.create(
  title: "HIIT Body Weight Workout",
  duration: 12,
  rest: 1, 
  interval: 30, 
  sets: 4 
)

workout1.exercises.create(description: "Jumping jacks")
workout1.exercises.create(description: "High knees")
workout1.exercises.create(description: "Jog in place")
workout1.exercises.create(description: "Burpees")
workout1.exercises.create(description: "Squat jumps")
workout1.exercises.create(description: "Walk in place")
