import {compose, pipe } from "lodash/fp";

/* FUNCTION COMPOSITION FUNC in a FUNC(FUNC(FUNC())) */
/* USING LODASH TO PIPE AND COMPOSE FUNCTION TO AVOID SO MANY PARENTHESES */
let input = "  JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
// const wrapDiv = str => `<div>${str}</div>`
const wrap = type => str => `<${type}>${str}</${type}>` // see currying.js to learn more
const toLowerCase = str => str.toLowerCase();

/* USING PIPE FROM LODASH TO READ FUNCTION RIGHT TO LEFT  */
const transform = pipe(trim , toLowerCase ,wrap("div"));
console.log(transform(input));

/* LODASH TO AVOID TO MANY PARENTHESES 

const transform = compose(wrap, toLowerCase, trim);
transform(input);
*/

/* TO mANY PARENTHESES 
const result = wrapDiv(toLowerCase(trim(input)));
*/

/* DEFAULT HIGHER ORDER FUNCTIONS
let numbers = [1,2,3];

numbers.map(number => number *2)

setTimeout(() => console.log("Hello"), 1000);

 
/* HIGER ORDER FUNCTIONS THAT RETURN OR INPUT AN ARGUMENT A FUNCTION

function sayHello() {
    return function() {
        return "hello"
    }
}

let fn = sayHello();
let message = fn(); 
 
function greet(fnMessage)
{
    console.log(fnMessage());
}

greet(sayHello);
 */