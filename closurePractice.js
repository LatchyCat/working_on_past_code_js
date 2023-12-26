/*
Problem 1: Counter Function
Create a function that returns another function. The returned function should act as a counter that increments by 1 every time it's called.

Example output:
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

1. Create a function that has a callback function as a argument
Create a total count as a higher order function variable
variable will be returned at the end
2. the call back function needs to return a total and adds to the total every time its invoked
CallBack function steps:
1. increments by 1 when invoked
2. HOF function will be used to pass arguments into the LOF
3. return function will be a counter to the current total
*/

const createCounter1 = () => {
    let total = -1;
    let sum = 0;
    return function() {
        if (total <= sum) sum += 1
        total = sum;
        return total;
    };
};

// const counter1 = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3

//Chat GPT answer:
const createCounter = () => {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
};

// const counter = createCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2
// console.log(counter()); // Output: 3

/*
Problem 2: Private Variable
Implement a function that returns an object with methods to "get and set" a private variable.
The variable should only be accessible through these methods.

const person = createPerson();
person.setName('Alice');
console.log(person.getName()); // Output: Alice

using the methods 'get' & 'set'
*/

const createPerson = () => {

    let name = ''; //private variable

    return {
    setName: (newName) => {name = newName}, //using setName method to set the invoked name as the private variable
    getName: (newName) => {return name}

    }
};

const createPerson2 = () => {
    let name = '';

    return {
        setName: (_name) => {name = _name},
        getName: (_name) => {return 'This is the new name: ' + name}
    }
};

// const person = createPerson2();
// person.setName('Alice');
// console.log(person.getName()); // Output: Alice

/*
Problem 3: Calculator
Create a calculator function that returns an object with methods for basic mathematical operations (addition, subtraction, multiplication, division).

const calc = createCalculator();
console.log(calc.add(5).subtract(2).multiply(3).divide(2).getResult()); // Output: 10.5
*/

const createCalculator = () => {
    let result = 0;

    return {
        add: function(num) {
            result += num;
            return this;
        },
        subtract: function(num) {
            result -= num;
            return this;
        },
        multiply: function(num) {
            result *= num;
            return this;
        },
        divide: function(num) {
            result /= num;
            return this;
        },
        getResult: function() {
            return result;
        }
    };
};

const calc = createCalculator();
console.log(calc.add(5).subtract(2).divide(2).multiply(3).getResult()); // Output: 4.5




/*
Problem 4: Delayed Function
Implement a function that takes another function and a delay time. When the returned function is called,
it should execute the provided function after the specified delay.

const delayedGreeting = delayFunction(sayHello, 2000);
delayedGreeting(); // After 2 seconds: Hello!
*/


/*
Problem 5: Event Listener Management
Write a function that manages event listeners for an HTML element. It should provide methods to add and remove event listeners.

const button = document.getElementById('myButton');
const eventManager = createEventManager(button);

const handleClick = () => console.log('Button clicked!');
eventManager.addEvent('click', handleClick);

// After some time or interaction...
eventManager.removeEvent('click', handleClick);
*/
