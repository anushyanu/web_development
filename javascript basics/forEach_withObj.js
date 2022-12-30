// let redBtn = document.getElementById("red")
// let blueBtn = document.getElementById("blue")
// let greenBtn = document.getElementById("green")

// redBtn.onclick = () => {
//     console.log("red")
// }

// blueBtn.onclick = () => {
//     console.log("blue")
// }

// greenBtn.onclick = () => {
//     console.log("green")
// }

const squares = document.querySelectorAll(".color-square")
const timesClicked = {"red" : 0,"blue" : 0,"green" :0}

squares.forEach(square =>{
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]

    }
})

function clearScore(){
    timesClicked.red = 0
    timesClicked.blue = 0
    timesClicked.green = 0
    squares.forEach(square => {
        square.innerText = ""

    })
}

const clearBtn = document.getElementById("clear")
clearBtn.onclick = () => clearScore()
 