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
        this.reset();
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
        case "+":
        case "-":
        case "*":
        case "/":
        default:
            if(value==="." || !isNaN(value)){
                calculator.appendNumber(value);
            }
            break;
    }

    console.log(target.value);
})



    

console.log(displayElement);