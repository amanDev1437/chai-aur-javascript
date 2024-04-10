let user1 = {
    name:"Aman",
    age: 18,
    class: "Bsc",
    loggedIn: false,
    greeting: function hello(){console.log(`Hello ${this.name}`)}
}

console.log(user1.name);
console.log(user1["name"]);
user1.age = 19;
console.log(user1);

console.log(user1.greeting());


