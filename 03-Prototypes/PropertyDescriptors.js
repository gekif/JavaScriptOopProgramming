let person = { name: 'fikar' };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// console.log(person);

/*
for (let key in person)
    console.log(key);

console.log(Object.keys(person));*/

// console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

person.name = 'Nyentot';

// delete person.name;

console.log(person);
