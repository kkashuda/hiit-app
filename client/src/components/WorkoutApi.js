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
}

export default WorkoutApi;

