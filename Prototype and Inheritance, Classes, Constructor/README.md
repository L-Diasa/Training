# Prototype and Inheritance, Classes, Constructor

## Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal
```js
let Animal = {
    move: "Animal can move."
}

let Cat = {
    __proto__: Animal
}

console.log(Cat.move)
```
```
Animal can move.
```