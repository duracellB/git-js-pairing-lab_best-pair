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
function untilNum(num) {
    for(let i = 1; i<= num; i+=1 ){
        console.log(i)
    }
}

//5
function multiply(a,b){
    return a*b
}

//6
function add(a,b){
    return a===b ? 6*a : a + b
}

//7
function isNegative(num){
    return num<0
}

//8
function triangleArea(a,b){
    let c = a*b
    return c/2
}

//9
function betweenTwentyAndFourty(num){
    return num > 20 && num < 40
}

//10
function largest(a,b,c){
    return Math.max(a,b,c)
}

function printTime(){
    let today = new Date()
    return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}

console.log(printTime())