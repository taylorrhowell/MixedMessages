const randomName = require('node-random-name');
const randomAnimal = require('random-animal-name-generator');

const nameWithAdj = randomAnimal();
const animalName = nameWithAdj.split(' ')[1];