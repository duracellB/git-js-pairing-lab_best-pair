//Code your solutions in this file
//1
function fiveToOneHundred(){
    for(let i = 5; i<=100; i++){
        console.log(i)
    }
}

//2
const multiplesOfThree = () => {
    for(let i = 3; i <= 100; i++){
        if (i%3===0){
        console.log(i)
    }
    }    
}

//3
function multiplesOfThreeOrFive(){
    for(let i = 3 ; i<=100 ; i+=1){
        if(i%3 === 0 || i%5 === 0){
            console.log(i)
        }
    }
}

//4