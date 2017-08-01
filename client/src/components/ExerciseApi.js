class ExerciseApi {
    static getExercises() {
        return fetch('/exercises', {
            method: 'GET', 
            headers: {
                'Accepts': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
}

export default ExerciseApi; 