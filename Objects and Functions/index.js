// Create a car object, add a color property to it with the value equals 'black'
const car = {
    color: 'black'
} 
console.log("The color of the car is", car.color)

// Change the color property of the car object to 'green'
car['color'] = 'green'
console.log("The color of the car is", car.color)

// Add the power property to the car object, 
// which is a function and displays the engine power to the console
car.power = () => console.log("The engine power of the car is 300 horsepower")
car.power()


// Pears and apples are accepted to the warehouse, 
// write a function that returns the result of 
// adding the number of accepted pears and apples
const warehouse = {
    pears: 24,
    apples: 13
}

function total() {
    return warehouse.pears + warehouse.apples
}

console.log("The number of accepted pears and apples is", total())

// Your name is saved in the payment terminal, 
// write a function to define the name in the terminal 
// (if you entered your name, then hello + name, if not, then there is no such name)
function terminal(name) {
    name  === 'Lika' ? console.log('hello ' + name) : console.log("there is no such name")
}

terminal('Lika')
terminal('Luka')
terminal()

// Write a function for calculating the type of argument and type output to the console
function type(arg) {
    console.log("The type of the argument is", typeof arg)
}

type(4.7)
type("me")
type(false)

// Write a function that determines whether a number is prime or not
function isPrime(num) {
    let isPrime = true
    if(num == 1) 
        isPrime = false
    else if (num !== 2) {
        let root = num ** 0.5
        for (let i = 2; i < root; i++) {
            if(num % i === 0) {
                isPrime = false
                break
            }
        }
    }
    console.log(`The number is ${isPrime ? '' : 'not'} prime`)
}

isPrime(1)
isPrime(2)
isPrime(8)
isPrime(11)
