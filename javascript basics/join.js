const actors = [
    {name : "john", networth : 2000000},
    {name : "nic", networth : 5000000},
    {name : "surya", networth : 1000000}
]

let result = actors.filter(actor => actor.networth >1000000)
console.log(result)

let names = result.map(act => act.name).join(" ")
console.log(names)