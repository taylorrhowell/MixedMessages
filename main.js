const randomName = require('node-random-name');

const randomAnimal = require('random-animal-name-generator');
const nameWithAdj = randomAnimal();
const animalName = nameWithAdj.split(' ')[1];

const activityList = ['jumps', 'skips', 'runs', 'falls', 'leaps', 'stands', 'drives', 'sleeps', 'wrestles', 'dances', 'loses fingers', 'trapped alone', 'arrested', 'crashes', 'plays games', 'eats breakfast', 'eats lunch', 'eats dinner', 'eats snack', 'eats dessert', 'dives'];
const generateActivity = () => {
    const randomIndex = Math.floor(Math.random() * activityList.length);
    const activity = activityList[randomIndex];
    return activity;
};

const headlineGenerator = () => {
    const name = randomName({ gender: "male" });
    const activity = generateActivity();
    const animal = animalName;
    const naked = Math.floor(Math.random() * 2) ? 'Naked ' : '';
    const state = Math.floor(Math.random() * 2) ? 'survives' : 'dies';
    return `${naked}Florida man, ${name}, ${activity} in ${animal} enclosure, ${state}.`
};

console.log(headlineGenerator());