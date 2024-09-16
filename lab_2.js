
// 1. •	Rewrite the following code block using ES6 syntax, 
// ie. const, let, arrow function, template literals and for..of

// Reference Old Code
// function gretter(myArray, counter) {

//     var greetText = 'Hello';
    
//     for (var index = 0; index < myArray.length; index++) { console.log(greetText + " " + myArray[index]);
    
//     }
// }    
//     gretter (['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


    const greeter = (myArray, counter) => {
        const greetText = 'Hello';
        
        for (const name of myArray) {
            console.log(`${greetText} ${name}`);
        }
    };
    
    greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
 
    
// 2. •	Using destructuring assignment syntax and the spread operator, 
// write a function which will capitalize the first letter of a string.

function capitalize(str) {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('');
}

console.log(capitalize('fooBar'));  // Output: FooBar
console.log(capitalize('node3s'));  // Output: Node3s

// 3. •	Using array.proto.map create function to use the capitalize method in 
// Exercise 2 to upper case the first character of each Color in the following array.

const colors = ['red', 'green', 'blue']

// Use Array.prototype.map to capitalize each color
const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);


// 4. •	Using array.proto.filter create a function that will filter out all 
// the values of the array that are less than twenty.

var values = [1, 60, 34, 30, 20, 5]

// Use Array.prototype.map to filter less than 20 value
const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);


// 5. Using array.proto.reduce create calculate the sum and product of a given array.

var array = [ 1, 2, 3, 4]
    
// Calculate the sum using reduce
const calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Calculate the product using reduce
const calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(calculateSum);
console.log(calculateProduct);


// 6. Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives from Car Class. 
// The parameters for the Car class is the model and year. The parameters for the subclass is the model, year and balance.

// Use the super key word in the Sedan subclass to set the model and name in base Car constructor.

//  Car class
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

// Sedan subclass extending Car
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);  // Calls the constructor of the base class Car
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

// Example usage
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());  // Output: Model: Pontiac Firebird Engine 1976

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());    // Output: Volvo SD has a balance of $30000.00


