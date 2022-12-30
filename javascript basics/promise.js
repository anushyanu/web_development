// working with promise

const promise1 = new promise((resolve,reject){
    setTimeout(() => {
        isReady = [True,False][Math.floor(Math.random()) * 2]
        isReady ? resolve("Soup is ready") : reject("Sorry not available")
    },1000)
})


console.log("fetch :",fetch("https://dog.ceo/api/breeds/image/random") // promise
.then(response => response.json()) // promise
.then(response => console.log(json))
)