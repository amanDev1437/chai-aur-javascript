function addCartValue(...num) {
  return num;
}

console.log(addCartValue(2, 3, 4, 13, 44));

const user = {
  name: "Aman",
  age: 19,
  course: "Chai aur JavaScript",
};

function handleObject(obj) {
  return `My name is ${obj.name} and I am ${obj.age} years old.
  I am doing ${obj["course"]}`;
}

console.log(handleObject(user));
