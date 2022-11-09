# Objects and Functions

## Create a car object, add a color property to it with the value equals 'black'
```js
const movies = ['Fullmetal Alchemist', 'Bullet Train', 'Athena', 'Prey', 'Avatar']
movies.forEach(movie => console.log(movie))
```
```
Fullmetal Alchemist
Bullet Train
Athena
Prey
Avatar
```

## Given an array of car manufacturers, convert the array to a string and back to an array
```js
let manufacturers = ['Tesla', 'Porsche', 'McLaren', 'Ferrari', 'Lamborghini']
manufacturers = manufacturers.toString()
console.log(manufacturers)
console.log(typeof manufacturers)
manufacturers = manufacturers.split(',')
console.log(manufacturers)
console.log(typeof manufacturers)
```
```
Tesla,Porsche,McLaren,Ferrari,Lamborghini
string
[ 'Tesla', 'Porsche', 'McLaren', 'Ferrari', 'Lamborghini' ]
object
```

## Given an array of the names of your friends, add the words hello to each element of the array
```js
const friends = ['Gvanca', 'Mari', 'Nutsa', 'Salome', 'Keti']
console.log(friends)
friends.forEach((friend, i, arr) => arr[i] = 'Hello ' + friend)
console.log(friends)
``` 
```
[ 'Gvanca', 'Mari', 'Nutsa', 'Salome', 'Keti' ]
[
  'Hello Gvanca',
  'Hello Mari',
  'Hello Nutsa',
  'Hello Salome',
  'Hello Keti'
]
```

## Convert numeric array to Boolean
```js
const numArr = [1, 3, 6, 2, 0]
const boolArr = numArr.map(num => Boolean(num))
console.log(numArr)
console.log(boolArr)
``` 
```
[ 1, 3, 6, 2, 0 ]
[ true, true, true, true, false ]
```

## Sort the array [1,6,7,8,3,4,5,6] in descending order
```js
const arr = [1,6,7,8,3,4,5,6]
console.log(arr)
arr.sort()
console.log(arr)
```
```
[
  1, 6, 7, 8,
  3, 4, 5, 6
]
[
  1, 3, 4, 5,
  6, 6, 7, 8
]
```

## Filter array [1,6,7,8,3,4,5,6] by value> 3
```js
const array = [1,6,7,8,3,4,5,6]
const filtered = array.filter(value => value > 3)
console.log(filtered)
```
```
[ 6, 7, 8, 4, 5, 6 ]
```

## Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
```js
function outputIndex(arr, num) {
    console.log(arr.findIndex(val => val === num))
}

outputIndex([2, 88, 34, 14, 62], 14)
```
```
3
```

## Implement a loop that will print the number 'a' until it is less than 10
```js
for(let i = 1; i < 10; i++) {
    console.log('a')
}
```
```
a
a
a
a
a
a
a
a
a
```

## Implement a loop that prints prime numbers to the console
```js
const sentinel = 30
for(let i = 2; i < sentinel; i++) {
    let isPrime = true
    if (i !== 2) {
        let root = i ** 0.5
        for (let j = 2; j < root; j++) {
            if(i % j === 0) {
                isPrime = false
                break
            }
        }
    }
    if(isPrime)
        console.log(i)
}
```
```
2
3
4
5
7
9
11
13
17
19
23
25
29
```

## Implement a loop that prints odd numbers to the console
```js
const from = -10
const upTo = 10
for(let i = from; i < upTo; i++) {
    if(i % 2)
        console.log(i)
}
```
```
-9
-7
-5
-3
-1
1
3
5
7
9
```