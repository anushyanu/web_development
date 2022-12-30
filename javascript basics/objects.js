// line 4 introducer is a function name with 2 arguments and arrow function 
// we can use function line 11 inside objects and should do the needed performance inside the functions 
// line 12 this incidicate the person in line 6
 const introducer = (name,shirt) => { 
    
    const person ={
        name : name,
        shirt : shirt,
        assests : 10000,
        liabilities : 5000,
        networth : function (){
            return this.assests - this.liabilities
        }

    }

    const intro = ` hi ${person.name} you wore a ${person.shirt} shirt and the neworth is ${person.networth()} rupees`
    return intro
}

console.log(introducer("ANU","PINK"))