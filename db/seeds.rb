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
  sets: 4, 
  cooldown: 20, 
  exercises: "Jumping jacks, High knees, Jog in place, Burpees, Squat jumps, Walk in place"
)

workout2 = Workout.create(
  title: "HIIT Fat Shredder Workout",
  duration: 18,
  rest: 1, 
  interval: 45, 
  sets: 4,
  cooldown: 10,
  exercises:  "Fast squats, Jumping jacks, Skipping rope, Butt kicks, Mountain climbers, Squat jumps"
)
