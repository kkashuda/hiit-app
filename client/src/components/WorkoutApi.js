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
        .catch(error => console.log(error))

    }
}


export default WorkoutApi;

