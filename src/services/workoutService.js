const workout = require('../database/workout')



const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
   
};
const getOneWorkouts = () => {
    return;
};
const createNewWorkouts = () => {
    return;
};
const updateOneWorkouts = () => {
    return;
};
const deleteOneWorkouts = () => {
    return;
};


module.exports = {
    getAllWorkouts
}
