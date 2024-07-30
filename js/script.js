class Calculator{

    constructor(displayElement){
        this.displayElement=displayElement;
    }

}

const displayElement=document.getElementById("display");

const calculator= new Calculator(displayElement)



console.log(displayElement);