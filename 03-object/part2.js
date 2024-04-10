let user3 = new Object();

user3.id = "123abc";
user3.name = "Aman Singh";
user3.age = 19
console.log(user3);

const user4 = new Object();

user4.id = "124abc";
user4.name = "Saksham";
user4.marks = 96
console.log(user4);

console.log(Object.assign(user3, user4));
console.log({...user3, ...user4});