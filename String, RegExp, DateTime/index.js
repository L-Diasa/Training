// Given the string 'ahb acb aeb aeeb adcb axeb'. 
// Write a regular expression that matches the strings 
// ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const str1 = 'ahb acb aeb aeeb adcb axeb'
const regex1 = /a.b/g
const matched1 = str1.match(regex1)
console.log(matched1)

// Given the string '2 + 3 223 2223'. 
// Write a regex that finds line 2 + 3 without capturing the rest
const str2 = '2 + 3 22 3 2223'
const regex2 = /2 \+ 3/g
const matched2 = str2.match(regex2)
console.log(matched2)

// Get the day, month and year of the current date 
// and output it to the console separately
const dayNames =  ["Sunday", "Monday", "Tuesday", "Wednesday", 
                    "Thursday", "Friday", "Saturday"]
const monthNames = ["January", "February", "March", "April", 
                    "May", "June", "July", "August", "September", 
                    "October", "November", "December"]

let now = new Date()
console.log(dayNames[now.getDay()])
console.log(monthNames[now.getMonth()])
console.log(now.getFullYear())