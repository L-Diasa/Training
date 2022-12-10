# Exception Handling

## In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. 
```js
try {
    console.log (a)
    let a = 3
} catch(err) {
    console.log('let must be declared before use.')
}
```
```
let must be declared before use.
```

## When running 1/0, the error 'cannot be divided by zero'
```js
try {
    const num1 = 0
    const num2 = 1
    let result = 1/0
    if(result == 'Infinity')
        throw new SyntaxError("cannot be divided by zero")
} catch (err) {
    console.log(err.message)
}
```
```
cannot be divided by zero
```