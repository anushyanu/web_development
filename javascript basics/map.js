// map is used as loops and return as array

const doubleMap = (numbers) => {
    
    return numbers.map(number => number * 2)
}

console.log(doubleMap([1,2,3,4]))


// filter is used as loops and filter according to the conditions to array

const single = (nums) => {
    return nums.filter(num => num > 3)
}
console.log(single([1,2,4,6,8,10]))