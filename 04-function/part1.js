function add(num1, num2){
    return num1+num2;
}

const result = add(4,8);
console.log(result);

function loggedInMessage(username = "Guestk"){
    return(`${username} just logged in`);
}

console.log(loggedInMessage("Aman"));