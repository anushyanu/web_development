// higher order function takes functon as argument and pass 0 to the reduce function in line 5

const numbers = [1 ,2, 4.6,5.2,10]

let res = numbers.reduce(getSum,0)

function getSum(a,b){
    return a + Math.round(b)

}

console.log(res)