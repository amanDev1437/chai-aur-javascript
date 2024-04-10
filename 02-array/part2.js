const sci = ["physics", "chemistry", "maths"]
const comm = ["accounts", "bst","eco"]

const combine = sci.concat(comm);
console.log(combine);
console.log([...sci, ...comm]);

const score1 = 100;
const score2 = 200;
const score3 = 300;

const numArr = Array.of(score1, score2, score3);
console.log(numArr);