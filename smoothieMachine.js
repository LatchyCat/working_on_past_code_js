/*
Write a function named smoothieMachine that accepts any number of param's and a function.
The return function will also accept any number of param's
The return string will include all of the parameters of the smoothieMachine and the return function

Example: let smoothie1 = smoothieMachine();
console.log(smoothie1('milk'));
Expected output: "I'm having a smoothie with milk"
*/

let smoothieMachine = (...ingredients) => {

    let moreIngredients = (...restOfIngredients) => {
        //Add all the ingredients together
        ingredients = ingredients.concat(restOfIngredients);
        //create a copy
        let copy = ingredients.slice();
        //Start the sentence
        let smoothie = "I'm having a smoothie with ";
        //pop off the last ingredient
        let last = copy.pop();
        //Loop over ingredients and add them in
        for (let i = 0; i < copy.length; i++) {
            let currentIngredients = copy[i];
            smoothie += currentIngredients + ' and ';
        }
        //adding last ingredient
        smoothie += last;
        //return sentence
        return smoothie;
    }
        return moreIngredients;
};


let smoothieMachine2 = (...ingredient) => {
    let moreIngredients = (...restOfIngredients) => {
        ingredient = ingredient.concat(restOfIngredients);
        let copy = ingredient.slice();
        let smoothie = "I'm having a smoothie with ";
        let last = copy.pop()
        for (let i = 0; i < copy.length; i++) {
            let currentIngredients = copy[i];
            smoothie += currentIngredients + ' and '
        }
        smoothie += last;
        //return smoothie
        return smoothie;
    };
        return moreIngredients;
};


const smoothieMachine3 = (...ingredient) => {
    const restOfIngredients = (...moreIngredients) => {
        ingredient = ingredient.concat(moreIngredients);
        let copy = ingredient.slice();
        let smoothie = "I'm having a smoothie with "
        let last = copy.pop()
        for (let i = 0; i < copy.length; i++) {
            let currentIngredients = copy[i];
            smoothie += currentIngredients + ' and '
        }
        smoothie += last;
        return smoothie;
    };
        return restOfIngredients;
};

const smoothieMachine4 = (...ingredient) => {
    let moreIngredients = (...moreIngredients) => {
        ingredient.push(...moreIngredients);
        return "I'm having a smoothie with " + ingredient.join(' and ');
    };
        return moreIngredients;
};



/*
Write a function named smoothieMachine that accepts any number of param's and a function.
The return function will also accept any number of param's
The return string will include all of the parameters of the smoothieMachine and the return function

Example: let smoothie1 = smoothieMachine();
console.log(smoothie1('milk'));
Expected output: "I'm having a smoothie with milk"

1. Create a function called smoothieMachine that accepts any number of arguments smoothieMachine(...rest)
2. Create a call back function that will accept any number of arguments (...rest)
3. The return function has to return the main higher order function arguments + lower order function arguments
3a. higherOrderFunction.concat(lowerOrderFunction)
4. create a variable to slice() the lowerOrderFunction's arguments
5.Create a variable to pass the smoothie order
6. Create a variable to pop() the lowerOrderFunction argument into the slice()
7.Create a for(loop) to iterate through the (...restIngredients)
8.create a variable to represent (...restIngredients) at [i] ([i] = current index)
*/


let smoothieMachine5 = (...ingredients) => {
    let moreIngredients = (...restIngredients) => {
        ingredients = ingredients.concat(restIngredients);
        let copy = restIngredients.slice()
        let smoothie = "I'm going to have a smoothie with "
        let popped = copy.pop()
        for (let i = 0; i < copy.length; i++) {
            let mixedSmoothie = copy[i]
            smoothie += mixedSmoothie + ' and add ingredient '

            smoothie += popped;
        };
        return smoothie;
    }
        return moreIngredients;
};

//Create a function that intakes all arguments (...rest)
const smoothieMachine6 = (...rest1) => {
    //Create a callback function to concat() the first argument with the callback function
    let lowerOrderFunction = (...rest2) => {
        //First argument will be pushed into the call back functions argument
        rest1.push(...rest2)
        //Return a string + the first argument joining the space //What does join() do? creates spaces or lets you input a specific spacer
        return "I'm having a smoothie with " + rest1.join(' add ')
    };
    //Return the call back function
    return lowerOrderFunction;
};

const smoothieMachine7 = (...ingredients) => {
    let extraIngredients = (...moreIngredients) => {
        ingredients.push(...moreIngredients)
        return "I want a smoothie with theses ingredients, " + ingredients.join(' add ')
    };
        return extraIngredients;
};


// Write a function named smoothieMachine that accepts any number of param's and a function.
// The return function will also accept any number of param's
// The return string will include all of the parameters of the smoothieMachine and the return function
//1. The function will accept all arguments (...rest)
//2. The call back function will accept all arguments as well and concat() the first argument with the callback function argument

const smoothieMachine8 = (...ingredients) => {
    const addedIngredients = (...moreIngredients) => {
        ingredients = ingredients.concat(moreIngredients)
        let copy = moreIngredients.slice()
        let smoothie = "I'm ordering a smoothie with "
        let popped = copy.pop()
        for (let i = 0; i < copy.length; i++) {
            let mixedSmoothie = copy[i];
            smoothie += mixedSmoothie + ' and ';

        }
        smoothie += popped;
        return smoothie;
    };
    return addedIngredients;
};

const smoothieMachine9 = (...rest1) => {
    const addedIngredients = (...rest2) => {
        rest1 = rest1.concat(rest2)
        let copy = rest2.slice()
        let smoothie = "Give me a smoothie with "
        let popped = copy.pop()
        for (let i = 0; i < copy.length; i++) {
            let mixedSmoothie = copy[i]
            smoothie += mixedSmoothie + ' and '
        }
        smoothie += popped
        return smoothie
    }
        return addedIngredients
}

const smoothieMachine10 = (...rest1) => {
    const addedIngredients = (...rest2) => {
        rest1 = rest1.concat(rest2)
        return "I want a smoothie with " + rest2.join( 'and ')
    }
        return addedIngredients
}

const smoothieMachine11 = (...ingredients) => {
    return function (...ingredients2) {
        const allIngredients = [...ingredients, ...ingredients2].join(' and ');
        return "I'm having a smoothie with " + allIngredients;
    };
};

const smoothieMachine12 = (...rest1) => {
    return function (...rest2) {
        const allIngredients = [...rest1, ...rest2].join(' and ');
        return `I'm having a big smoothie cup with ` + allIngredients;
    }
}
let smoothie1 = smoothieMachine12();
console.log(smoothie1('milk'));
console.log(smoothie1('kale', 'spinach'));
console.log(smoothie1('apple', 'strawberry', 'protein'))
