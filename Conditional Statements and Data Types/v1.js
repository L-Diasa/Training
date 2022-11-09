const string = "6"
const bool = true
const number = 2
console.log(typeof string, "is", string)
console.log(typeof bool, "is", bool)
console.log(typeof number, "is", number)

// Perform addition of various types (string + boolean, string + number, number + boolean)
const sum1 = string + bool
const sum2 = string + number
const sum3 = number + bool
console.log("string + boolean is", sum1)
console.log("string + number is", sum2)
console.log("number + boolean is", sum3)

// Perform multiplication of various types (string * boolean, string * number, number * boolean)
const mul1 = string * bool
const mul2 = string * number
const mul3 = number * bool
console.log("string * boolean is", mul1)
console.log("string * number is", mul2)
console.log("number * boolean is", mul3)

// Divide different types (string / boolean, string / number, number / Boolean)
const div1 = string / bool
const div2 = string / number
const div3 = number / bool
console.log("string / boolean is", div1)
console.log("string / number is", div2)
console.log("number / boolean is", div3)

// Perform explicit conversion (number, string, boolean)
// converting into number
const strIntoNum = Number(string)
console.log("string converted into number is", strIntoNum, "and its type is", typeof strIntoNum)
const boolIntoNum = Number(bool)
console.log("boolean converted into number is", boolIntoNum, "and its type is", typeof boolIntoNum)
// converting into string
const numIntoString = number.toString()
console.log("number converted into string is", numIntoString, "and its type is", typeof numIntoString)
const boolIntoString = bool.toString()
console.log("boolean converted into string is", boolIntoString, "and its type is", typeof boolIntoString)
// converting into boolean
const strIntoBool = Boolean(string)
console.log("string converted into boolean is", strIntoBool, "and its type is", typeof strIntoBool)
const numIntoBool = Boolean(number)
console.log("number converted into boolean is", numIntoBool, "and its type is", typeof numIntoBool)