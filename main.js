//Require in a random name generator to name our Florida man
const randomName = require('node-random-name');
//Require in a random animal name generator to find out what lives in the enclosure
const randomAnimal = require('random-animal-name-generator');
//Call the random animal name generator, but it comes in with an adjective we don't need
const nameWithAdj = randomAnimal();
//Parse out the name for our purposes by splitting the string into adjective and noun, then saving the noun
const animalName = nameWithAdj.split(' ')[1];
//Hardcoded the activity list that Florida man will participate in since I couldn't find a good activity generator
const activityList = ['jumps', 'skips', 'runs', 'falls', 'leaps', 'stands', 'drives', 'sleeps', 'wrestles', 'dances', 'loses fingers', 'trapped alone', 'arrested', 'crashes', 'plays games', 'eats breakfast', 'eats lunch', 'eats dinner', 'eats snack', 'eats dessert', 'dives'];
//Create a function that randomly selects an activity from the activity list
const generateActivity = () => {
    const randomIndex = Math.floor(Math.random() * activityList.length);
    const activity = activityList[randomIndex];
    return activity;
};
//Create the function that pulls all the random elements into one string output
const headlineGenerator = () => {
    //Call the random name generator with an object argument so that the outputs are male names only
    const name = randomName({ gender: "male" });
    const activity = generateActivity();
    const animal = animalName;
    //Use the ternary operator with a randomized condition of '1' or '0' to decide if the Florida man is naked and what his fate is
    const naked = Math.floor(Math.random() * 2) ? 'Naked ' : '';
    const state = Math.floor(Math.random() * 2) ? 'survives' : 'dies';
    return `${naked}Florida man, ${name}, ${activity} in ${animal} enclosure, ${state}.`
};
//Log the headline to the console
console.log(headlineGenerator());