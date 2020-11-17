# Mixed Messages - Florida Man Headlines
> This message-generating program is designed to log random news headlines featuring the infamous Florida Man. These headlines are not real headlines, but are randomly generated every time the program is run.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Output](#output)
* [Setup](#setup)
* [Code Example](#code-example)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)

## General info
This project is part of the [Full-Stack Engineer Career Path](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path) program through [Codecademy](https://www.codecademy.com)

## Technologies
* Visual Studio Code - version 1.51.1
* Node.js - version 12.14.1
* NPM - version 6.14.4
* JavaScript

## Output
>`Naked Florida man, Robby Hornberger, jumps in alligator enclosure, dies.`

>`Florida man, Harrison Yetto, dives in prairiedog enclosure, survives.`

>`Florida man, Domenic Elsensohn, dances in bear enclosure, dies.`

## Setup
To run this program, start by cloning this repository to your own machine. Open the cloned directory in your favorite text editor (I used Visual Studio Code). Next, make sure your local environment has [Node.js](https://www.nodejs.org) installed. 

Next, run the following in your terminal to install the dependencies:
>`npm install`

To run the program, use Node by inputting the following in your terminal: 
> `node main.js`

You will see the random headline generate below your command.

## Code Example
Pulling together all the randomness:
```javascript
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
```

## Features
This program features randomly-generated:
* Male names
* Animal names
* Activities
* Whether or not Florida man is naked, or if he survives his activity

## Status
Project is: _finished for now_ since I may come back and add additional features, but for now I am continuing with my learning.

## Inspiration
I found the Florida man joke funny and memorable, and when I was tasked with generating random messages in a console-based program, I felt this topic would be perfect.