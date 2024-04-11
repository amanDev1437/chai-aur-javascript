var c = 100
if(true){
    let a = 10;
    const b = 20;
    var c = 30
}

//console.log(a);
//console.log(b);

console.log(c);

function one(){
    const username = "Aman";
    function two(){
        const website = "Youtube"
        console.log(username)
    }
    two();
    //console.log(website) accesing variable outside scope
}

one();
