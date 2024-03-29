class Calculator{
    constructor(previousButtonAndText,currentButtonAndText){
        this.previousButtonAndText = previousButtonAndText
        this.currentButtonAndText = currentButtonAndText
        this.clear()
    }

    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined

    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)

    }

    appendNumber(number){
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split(".")[0])
        const decimalDigits = stringNumber.split(".")[1]
        let integerDisplay
        if (isNaN(integerDigits)){
            integerDisplay = ""
        }else {
            integerDisplay = integerDigits.toLocaleString("en",{maximumFractionDigits : 0})
        
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }

    updateDisplay(){
        this.currentButtonAndText.innerText = this.currentOperand
        if(this.operation != null){
            this.previousButtonAndText.innerText = `${this.getDisplayNumber(this.previousOperand)}  ${this.operation}`
        }else{
            this.previousButtonAndText.innerText = ""
        }
    }

    chooseOperation(operation){
        if (this.currentOperand === " ") return
        if (this.previousOperand !== " "){
            this.compute()
        }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    compute(){
        let computation 
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr)) return
        switch(this.operation){
            case "+":
                computation = prev + curr 
                break
            case "-":
                computation = prev - curr
                break
            case "*":
                computation = prev *curr
                break
            case "/":
                computation = prev / curr
                break
            default:
                return
        }

        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ""

    }
}




const numberButtons = document.querySelectorAll("[data-value]")
const operatorButtons = document.querySelectorAll("[data-operator]")
const clearButton = document.querySelector("[data-all-clear]")
const deleteButton = document.querySelector("[data-delete]")
const equalButton = document.querySelector("[data-equal]")
const previousButtonAndText = document.querySelector("[data-previous-operand]")
const currentButtonAndText = document.querySelector("[data-current-operand]")

const calculator = new Calculator(previousButtonAndText,currentButtonAndText)

numberButtons.forEach(button => {
    button.addEventListener("click",() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click",() => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })

})

equalButton.addEventListener("click",() => {
    calculator.compute()
    calculator.updateDisplay()
    
})

clearButton.addEventListener("click" ,() => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click",() => {
    calculator.delete()
    calculator.updateDisplay()
})

