// Import (JavaScript ES5)
var Prando = require('prando');

let rng = new Prando("17-11-2019-23-11-2019");

const people = ["Tayo","Samad","Dare","Yahaya"]

for(let i = 0 ; i < people.length ; i++){
    const j = rng.nextInt(0,i+1)
    const temp = people[i]
    people[i] = people[j]
    people[j] = temp
}

console.log(people)

