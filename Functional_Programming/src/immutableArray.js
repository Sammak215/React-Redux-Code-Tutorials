const numbers = [1,2,3];

const added = [0, ...numbers, 4]

const sliceArray = [
    ...numbers.slice(0, numbers.indexOf(2)),

    4,

    ...numbers.slice(numbers.indexOf(2))

];

//Removing 
const removed = numbers.filter(n => n !== 2);

const updated = numbers.map(n => n === 2 ? 20 : n);



