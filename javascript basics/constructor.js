// constructor are created usinG the keyword "new" at the bottom
//function are used as constructors with new keyword is used
// function name shoubt be in caps first letter
// when you use the new keyword, it creates as object{} and return the function,so no need of creating empty object


function Student(name,rollno,marks){
    //var student = {}
    this.name =  name;
    this.rollno = rollno;
    this.marks = marks;
    // return student 
}

var stud1 = new Student("yanu",10,90);
// if you dont use new and if you call the constructor using this , then it shows as undefined
var stud2 = new Student("anu" , 50,100);

console.log(stud1)
console.log(stud2)