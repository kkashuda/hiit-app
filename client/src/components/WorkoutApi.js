class WorkoutApi {
    static getWorkouts() {
        return fetch('/workouts', {
            method: "GET", 
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

     static createWorkout(workout) {
        return fetch('/workouts', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(workout)
    
        })
         .then(response => response.json())
         .then(json => console.log(json))
         .then(workout => this.setState({
             workouts:[...this.state.workouts, workout.title],
             workouts:[...this.state.workouts, workout.interval],
             workouts:[...this.state.workouts, workout.sets],
             workouts:[...this.state.workouts, workout.duration],
             workouts:[...this.state.workouts, workout.rest],
             workouts:[...this.state.workouts, workout.exercises],
             
         }))
         .then(window.location.reload())
    }
}


export default WorkoutApi;

