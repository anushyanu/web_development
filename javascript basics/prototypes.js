// in this line 8, getprice function is used , now the v1 and v2 both uses this.wheels,this.price and this.getprice function 
// so it takes lot of memory. if there are many functions like line8 then each v1 v2 etc takes memory and use that.
//our aim is to use the line 8 function only if needed. so we use prototype

function Vehicle(wheels,price){
    this.wheels = wheels;
    this.price = price;
    this.getprice = function(){
        return this.price;
    }
}

var v1 = new Vehicle(2,20000);
console.log(v1)

var v2 = new Vehicle(3,40000);
console.log(v2)  


// prototypes are used for sharing the function to various objects such as x1 nad x2
// x1 and x2 can access line 28 at any time if needed.

function Vehicle(wheels,price){
    this.wheels = wheels;
    this.price = price;
}

Vehicle.prototype.getprice = function(){
    return this.price;
}

Vehicle.prototype.color = "black";

var x1 = new Vehicle(20,5000);
console.log(x1.getprice())
console.log(x1.color)
console.log(Vehicle.prototype)
console.log(Vehicle.prototype.constructor)
var x2 = new Vehicle(40,1000);
console.log(x2.getprice())
