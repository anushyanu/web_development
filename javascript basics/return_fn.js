function sum(a,b){
    // if there is no return then the function is useless to use further 
    return a + b
}

num = sum(1,2)
console.log(num)


//Arrow functions with retrn implicititly(no need to use return in this, after arrow a + b returns automatically)
const add = (a,b) => a + b
console.log(add(10,20))

//arrow functions with return explicitily
const addition  = (a,b) =>{
    return a+b
}
console.log(addition(10,50))