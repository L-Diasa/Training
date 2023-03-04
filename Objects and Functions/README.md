# Objects and Functions
## Create a car object, add a color property to it with the value equals 'black'
```js
const car = {
    color: 'black'
} 
console.log('The color of the car is', car.color)
```
```
The color of the car is black
```
## Change the color property of the car object to 'green'
```js
car['color'] = 'green'
console.log('The color of the car is', car.color)
```
```
The color of the car is green
```
## Add the power property to the car object, which is a function and displays the engine power to the console
```js
car.power = () => console.log('The engine power of the car is 300 horsepower')
car.power()
```
```
The engine power of the car is 300 horsepower
```
## Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
```js
const warehouse = {
    pears: 24,
    apples: 13
}

function total() {
    return warehouse.pears + warehouse.apples
}

console.log('The number of accepted pears and apples is', total())
```
```
The number of accepted pears and apples is 37
```
## Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
```js
function terminal(name) {
    name  === 'Lika' ? console.log('hello ' + name) : console.log('there is no such name')
}

terminal('Lika')
terminal('Luka')
terminal()
```
```
hello Lika
there is no such name
there is no such name
```
## Write a function for calculating the type of argument and type output to the console
```js
function type(arg) {
    console.log('The type of the argument is', typeof arg)
}

type(4.7)
type('me')
type(false)
```
```
The type of the argument is number
The type of the argument is string
The type of the argument is boolean
```
## Write a function that determines whether a number is prime or not
```js
function isPrime(num) {
    let isPrime = true
    if(num < 2) isPrime = false
    else {
        for (let i = 2; i < num; i++) {
            if(num % i === 0) {
                isPrime = false
                break
            }
        }
    }
    console.log(`The ${num} is ${isPrime ? '' : 'not'} prime`)
}
 
for(i = -5; i < 11; i++) {
    isPrime(i)
}
```
```
The -5 is not prime
The -4 is not prime
The -3 is not prime
The -2 is not prime
The -1 is not prime
The 0 is not prime
The 1 is not prime
The 2 is  prime
The 3 is  prime
The 4 is not prime
The 5 is  prime
The 6 is not prime
The 7 is  prime
The 8 is not prime
The 9 is not prime
The 10 is not prime
```
