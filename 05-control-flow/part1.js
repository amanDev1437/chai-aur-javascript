const marks = 45;

if(marks>90){
    console.log("A+");
}else if(marks>80 && marks<=90){
    console.log("A")
}else if(marks>70 && marks<=80){
    console.log("B");
}else{
    console.log("C");
}

const operator = "*";

switch(operator){
    case "+":
        console.log("Addition");
        break;
    case "-":
        console.log("Subs");
        break;
    default:
        console.log("Please choose right operator");
}

