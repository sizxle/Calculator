class Calculator{

    constructor(displayElement){
        this.displayElement=displayElement;
        this.reset();
    }

    reset(){
        this.display="";
        this.currentOperand="";
        this.previousOperand="";
        this.operation=undefined;
        // this.updateDisplay();
    }

    appendNumber(number){
        this.display=this.display.toString() + number.toString();
        this.updateDisplay();
    }

    updateDisplay(){
        this.displayElement.innerText= this.display;
    }

    delete(){
        this.display=this.display.toString().slice(0,-1);
        this.updateDisplay();
    }

    operatorSet(operator){
        if(this.display=="") return;

        if(this.previousOperand!==""){
            //calulate
        }

        this.operation=operator;
        this.previousOperand=this.display;
        this.display="";
        this.updateDisplay;
    }

    compute(){
        let results;

        const previousOp= parseFloat(this.previousOperand);
        const currentOp=parseFloat(this.display);

        if(isNaN(previousOp) || isNaN(currentOp)) return;

        switch(this.operation){
            case "-":
                results = previousOp - currentOp;
                break;
            case "+":
                results = previousOp + currentOp;
                break;
            case "*":
                results = previousOp * currentOp;
                break;
            case "/":
                results = previousOp / currentOp;
                break
            default:
                return;
        }

        this.display=results;
        this.operation=undefined;
        this.previousOperand="";
        this.updateDisplay();
    }

}

const displayElement=document.getElementById("display");

const calculator= new Calculator(displayElement);

document.querySelector("#calculator_buttons").addEventListener("click",(event)=>{
    const target = event.target ;

    if(!target.matches(".calculator_button")){
        return;
    }

    let value= target.value;

    switch(value){
        case "delete":
            calculator.delete();
            break;
        case "calculate":
            calculator.compute();
        case "+":
        case "-":
        case "*":
        case "/":
            calculator.operatorSet(value);
            break;
        default:
            if(value==="." || !isNaN(value)){
                calculator.appendNumber(value);
            }
            break;
    }

    console.log(target.value);
})



    

console.log(displayElement);