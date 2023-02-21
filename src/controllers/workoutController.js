const workoutService = require('../services/workoutService')


const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts(res);
    res.send({ status: "OK", data: allWorkouts})
    
};

const getOneWorkouts = (req, res) => {
    const Workout = workoutService.getOneWorkouts(req.params.workourId);
    res.send(`Get workouts ${req.params.workourId}`)
};

const createNewWorkouts = (req, res) => {
    const  createdWorkout = workoutService.createNewWorkouts(req.params.workourId);
    res.send(`Create workouts ${req.params.workourId}`)
};

const updateOneWorkouts = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkouts(req.params.workourId)
    res.send(`Update workouts ${req.params.workourId}`)
};


const deleteOneWorkouts = (req, res) => {
    workoutService.deleteOneWorkouts(req.params.workourId);
    res.send(`Delete workouts ${req.params.workourId}`)
};


module.exports = {
    getAllWorkouts,
    getOneWorkouts,
    createNewWorkouts,
    updateOneWorkouts,
    deleteOneWorkouts
}