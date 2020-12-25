const person = { 
    name :"John",
    address : {
        country:"PAK",
    }
};
const updated = Object.assign({}, person, { name: "Bob", age:30 })

/*Best practice */
const updated = {...person,
    /*deep copy for nested object */
    address : {
        ...person.address,
        country: "NEW YORK"
    },
    name: "Bob" ,
};