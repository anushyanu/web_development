

const totalScore = {playerScore : 0,computerScore : 0}

function getComputerChoice(){
    const rpsChoice = ["rock" , "paper" , "scissor"]
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}


function onClickRps(playerchoice){
    console.log({playerchoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerchoice,computerChoice)
    totalScore["playerScore"] += score
    
    console.log(totalScore)
    console.log({score})
    showResult(score,playerchoice,computerChoice)

}

function getResult(playerchoice,computerChoice){

    let score;
    if (playerchoice == computerChoice){
        score = 0
    }else if (playerchoice == "rock" && computerChoice == "scissor"){
        score = 1
    }else if (playerchoice == "scissor" && computerChoice == "paper"){
        score = 1
    }else if (playerchoice == "paper" && computerChoice == "rock"){
        score =1
    }else{
        score = -1
    }
    return score
}

function showResult(score,playerchoice,computerChoice){
    
    const result = document.getElementById("result-container")
    const hands = document.getElementById("hands")
    const final = document.getElementById("score")

    if (score == 0){
        result.innerText = "You drew"
    }else if(score == 1){
        result.innerText = "You Won"
    }else{
        result.innerText = "You Lose"
    }

    hands.innerText = `${playerchoice} vs ${computerChoice}`
    final.innerText = `Your Score : ${totalScore["playerScore"]}`


}


function playGame(){

    const rpsBtn = document.querySelectorAll(".rpsButton")
    rpsBtn.forEach(Btn =>{
        Btn.onclick = () => onClickRps(Btn.value)
    })

}

playGame()