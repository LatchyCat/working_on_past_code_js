/*
Write a function countScore(people) that takes an array of (people) as its input.
A score object has two key-value pairs: the score (string) and a point value (number)
countScore(people) should return an object that has key-value pairs listing each person ~
who scored as a key and the sum of the total points for the game as the their value.

Examples:
let pp1 = [
    {name: 'oriel', score: 10},
    {name: 'sara', score: 5},
    {name: 'jack', score: 10},
    {name: 'alfonzo', score: 2},
    {name: 'harlem', score: 7},
    {name: 'sara', score: -4}];
    console.log(countScore(pp1));

    let peeps = [
    {name: 'oriel', score: 300}
    {name: 'sara', score: 2}
    {name: 'jack', score: 2}
    {name: 'whinny', score: 2}
    {name: 'harlem', score: 3}];
    console.log(countScore(peeps))
*/

//Declare the function
let countScore = (scoresArr) => {

//Create the scopeObj that will hold persons scores
let scoresObj = {};

//Iterate through the scoresArr
for (let i = 0; i < scoresArr.length; i++) {
//Grab the object that holds the persons name and score
let personObj = scoresArr[i]

//Initialize the name and score
//Variables using dot notation
let name = personObj.name;
let score = personObj.score;

//Check if the name exists in the score in the scoresObj
if (scoresObj[name]) {
//Add the score to the that person key/value pair
scoresObj[name] += score;

} else {
    scoresObj[name] = score
}
};
//Return the scoreObj
return scoresObj
};

//Refactor - Updating the function and the references to const
//We do not want the reference variables to be reassigned or the functions

const countScore2 = (scoresArr) => {

const scoresObj = {};

//change the for loop into a forEach loop
scoresArr.forEach(function(personObj) {
    let name = personObj.name
    let score = personObj.score;

    if (scoresObj[name]) {
        scoresObj[name] += score;
    } else {
        scoresObj[name] = score;
    }
});
    return scoresObj;
};

//Destructuring the personObj

const countScore3 = (scoresArr) => {

    const scoresObj = {};

    scoresArr.forEach(function(personObj) {
       let {score, name} = personObj;

       if (scoresObj[name]) {
        scoresObj[name] += score;

       } else {
        scoresObj[name] = score;
       }
    });
    return scoresObj;
};

//below code does not work
//Erro: Uncaught TypeError TypeError: Cannot read properties of undefined (reading 'forEach')

const countScore4 = (scoresArr) => {
    const scoresObj = {};

   scoresArr.array.forEach(personObj => {
    let { name, score } = personObj;
    //Make if else statement one liner
    if (scoresObj[name]) scoresObj[name] += score;
    else scoresObj = score;
   });
    return scoresObj;
};


//Chat GPT Edit
const countScore5 = (scoresArr) => {
    const scoresObj = {};

    scoresArr.forEach(personObj => {
        let { name, score } = personObj;
        // Use ternary operator to simplify the if-else statement
        scoresObj[name] = (scoresObj[name] || 0) + score;
    });

    return scoresObj;
};

//What does countScore do?
//countScore will pass one argument. The arg will be as an array holding an object
//A empty object needs to be created to hold the results of the key/value pairs
//A loop needs to be created to iterate through the array / A forEach loop can be used to shorten the code
//Deconstructing the loop variable / let {name, score} = personObj << this is a deconstructed variable
//Create a if statement to check if the [name key] is in the scoresObj object
// If the name is not in the scoresObj then create the key/value pair in the empty object and add the score
//Return the scoresObj object with the results

const countScore6 = (scoresArr) => {
    const scoresObj = {};

    scoresArr.forEach(personObj => {
        let {name, score} = personObj;
        scoresObj[name] = (scoresObj[name] || 0) + score;
    });

        return scoresObj;
};

// let pp1 = [
//     {name: 'oriel', score: 10},
//     {name: 'sara', score: 5},
//     {name: 'jack', score: 10},
//     {name: 'alfonzo', score: 2},
//     {name: 'harlem', score: 7},
//     {name: 'sara', score: -4},
//     {name: 'oriel', score: 290}];
//     console.log(countScore6(pp1));

// let peeps = [
//         {name: 'oriel', score: 300},
//         {name: 'sara', score: 2},
//         {name: 'jack', score: 2},
//         {name: 'whinny', score: 2},
//         {name: 'harlem', score: 3}];
//         console.log(countScore6(peeps))

/*
//Practice reading the question and writing a polya's
Write a function countScore(people) that takes an array of (people) as its input.
A score object has two key-value pairs: the score (string) and a point value (number)
countScore(people) should return an object that has key-value pairs listing each person ~
who scored as a key and the sum of the total points for the game as the their value.

1. Crate a function called CountScore(people)
2.Score Object holds only two key and its value = key/value pair
3.score = key which will hold a (string) / point = value which will hold a (number)
4.countScore needs to return an output of an object, that displays the the (string)(number) for each person
5. The output needs to show the total of the points for each game played and the current value after being summed up

example: let pp1 = [
    {name: 'oriel', score: 10},
    {name: 'sara', score: 5},
    {name: 'jack', score: 10},
    {name: 'alfonzo', score: 2},
    {name: 'harlem', score: 7},
    {name: 'sara', score: -4},
    {name: 'oriel', score: 290}];
    console.log(countScore6(pp1));
Result: {oriel: 300, sara: 1, jack: 10, alfonzo: 2, harlem: 7}

The variable pp1 holds 7 entry's for the key 'name:'
The variable pp1 holds the value on the right hand side as score
(string)(number) = (name)(score)
Notice that the first key 'oriel' has a score of 10 and on the 7th line he gains 290 as a score
The total points 'oriel' finishes the game with is 300 / 10 + 290 = 300
As a condition in the countScores function there will need to be a summed calculation to add the new number to the existing number
*/

// 1.Crate a function called CountScore(people)
// 2.Score Object holds only two key and its value = key/value pair
// 2a. Create a empty object to keep track of the name/score
// 3.score = key which will hold a (string) / point = value which will hold a (number)
// 3a. Create a loop to iterate through the people.array (for() loop or forEach() loop)
// 3b. Create a variable that holds the representation of the (people) being iterated through the loop
// 3b options. (let variable = variable[i];) or (Deconstructing a variable (let {name, score} = variable;))
// 4.countScore needs to return an output of an object, that displays the the (string)(number) for each person
// 4a. Create a if else statement that will look at the empty object to see if [name] is in it / if it is then add to the score
// 5.The output needs to show the total of the points for each game played and the current value after being summed up
//Expected output: {oriel: 300, sara: 1, jack: 10, alfonzo: 2, harlem: 7}

let countScore7 = (people) => {
    let scoreObject = {};

people.forEach(peopleObj => {
    let {name, score} = peopleObj;
    // if (scoreObject[name]) scoreObject[name] += score
    // else scoreObject[name] = score;
    scoreObject[name] = (scoreObject[name] || 0) + score; //If the key called [name] is in the scoreObject = scoreObject[name]
});                     //if key name: is in scoreObject[name] or the value is equal to 0 add to the score (+ score)
    return scoreObject;
};

// Write a function countScore(people) that takes an array of (people) as its input.
// A score object has two key-value pairs: the score (string) and a point value (number)
// countScore(people) should return an object that has key-value pairs listing each person ~
// who scored as a key and the sum of the total points for the game as the their value.

const countScore8 = (argument) => {
    const objectScore = {}

    argument.forEach(personObj => {
        let {name, score} = personObj;

        objectScore[name] = (objectScore[name] || 0) + score;
    });
        return objectScore;
};


// Write a function countScore(people) that takes an array of (people) as its input.
// A score object has two key-value pairs: the score (string) and a point value (number)
// countScore(people) should return an object that has key-value pairs listing each person ~
// who scored as a key and the sum of the total points for the game as the their value.
//1. Create function call countScore(people)
//2. key = (string) value = (score)
//3. The function should sum up all the scores and return total
//4. The object should be returned with the totals

const countScore9 = (argument) => {
    const emptyObj = {};

    argument.forEach(personObj => {
        let {name, score} = personObj;
        if (emptyObj[name]) emptyObj[name] += score;
        else emptyObj[name] = score;
    });
    return emptyObj;
};

// Write a function countScore(people) that takes an array of (people) as its input.
// A score object has two key-value pairs: the score (string) and a point value (number)
// countScore(people) should return an object that has key-value pairs listing each person ~
// who scored as a key and the sum of the total points for the game as the their value.

/*
HigherOrderFunction takes an array of users stored in an object
The object will hold two a key named [name] and a value named [score]
The function needs to return all the key/value pairs
If the person does not have a key it will add it or if the person does have a key it will add the sum to the total score
In order to review the object a loop needs to be created to see if the people already have a key/value pair or not
Return the total score

The question above tells me: When seeing a problem that intakes a key/value pair and the value needs to be summed up and
the problem needs me return the value
1. empty array or object. it will be specified
2. A return of the empty array or object will be needed
3. The function will need to be iterated by a loop to review if there is a key/value pair in the empty object
4. The loop will be used to only review the objects key/value pairs
5. under the loop a if statement calculation will be done to add the key/value pair or to add to the value
*/

const countScore10 = (people) => {

    const emptyObject = {};

    people.forEach(peopleObj => {
        let {name, score} = peopleObj;
        if (emptyObject[name]) emptyObject[name] += score
        else emptyObject[name] = score

    });
        return emptyObject;
};

let countScore11 = (people) => {
    const emptyObj = {}
    people.forEach(loop => {
        const {name, score} = loop;
        if (emptyObj[name]) emptyObj[name] += score
        else emptyObj[name] = score
    });
        return emptyObj
};
    let pp1 = [
    {name: 'oriel', score: 10},
    {name: 'sara', score: 5},
    {name: 'jack', score: 10},
    {name: 'alfonzo', score: 2},
    {name: 'harlem', score: 7},
    {name: 'sara', score: -4},
    {name: 'oriel', score: 290}];
    console.log(countScore11(pp1));
