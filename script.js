
//some crucial variables
let resultScreenOn = false;
let firstNumber = ""
let secondNumber = ""
let resultNumber = 0
let operator = ""

// main function
function main(){
    document.addEventListener("click", function (e) {
        parent = e.target.parentElement.className;
        clicked = e.target.className;
        //resultscreen color and text changer
        if (parent == "onOff" || clicked == "onOff") {
            if (resultScreenOn == true) {
                resultScreenOn = false
                firstNumber = "";
                secondNumber = "";
                resultNumber = 0;
                operator = "";
                document.getElementsByClassName("resultScreen")[0].style.backgroundColor = "#556B2F";
                document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "";
            } else {
                resultScreenOn = true;
                document.getElementsByClassName("resultScreen")[0].style.backgroundColor = "greenyellow";
                document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "Copyright © Mikko Malm 2022";
            }
        }
        //resultscreen clear
        if(parent == "clear" || clicked == "clear") {
            document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "";
            firstNumber = "";
            secondNumber = "";
            resultNumber = 0;
            operator = "";
        }
        //first number
       if (resultScreenOn ==  true) {
        if (parent == "numberGrid" || clicked == "gridItem") {
            if (document.getElementsByClassName("resultScreen")[0].firstChild.textContent == "Copyright © Mikko Malm 2022") {
                document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "";
            }
            if (firstNumber.length <= 5 && operator==""){
                if("1234567890.".includes(event.target.id)){
                    firstNumber+=event.target.id
                    document.getElementsByClassName("resultScreen")[0].firstChild.textContent = firstNumber
                }
            }
       }
       if (parent == "gridItem" || clicked == "p"){
            if (document.getElementsByClassName("resultScreen")[0].firstChild.textContent == "Copyright © Mikko Malm 2022") {
                document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "";
            }
            if(firstNumber.length<=5 && operator==""){
                if("1234567890.".includes(event.target.parentElement.id)){
                    firstNumber+=event.target.parentElement.id
                    document.getElementsByClassName("resultScreen")[0].firstChild.textContent = firstNumber
                }
            }
        }
       }
        //operator
        if (parent == "numberGrid" || clicked == "gridItem") {
            if (firstNumber != "" && operator==""){
                if("÷-+x".includes(event.target.id)){
                    operator = event.target.id
                    document.getElementsByClassName("resultScreen")[0].firstChild.textContent = firstNumber + " " + operator
                }
            }
       }
       if (parent == "gridItem" || clicked == "p"){
            if (document.getElementsByClassName("resultScreen")[0].firstChild.textContent == "Copyright © Mikko Malm 2022") {
                document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "";
            }
            if (firstNumber != "" && operator==""){
                if("÷-+x".includes(event.target.parentElement.id)){
                    operator = event.target.parentElement.id
                    document.getElementsByClassName("resultScreen")[0].firstChild.textContent = firstNumber + " " + operator
                }
            }
        }
        //second number
        if (firstNumber!="" && operator!=""){
            if (parent == "numberGrid" || clicked == "gridItem") {
                if (secondNumber.length <= 5){
                    if("1234567890.".includes(event.target.id)){
                        secondNumber+=event.target.id
                        document.getElementsByClassName("resultScreen")[0].firstChild.textContent = firstNumber + " " + operator + " " + secondNumber
                    }
                }
           }
           if (parent == "gridItem" || clicked == "p"){
                if(secondNumber.length<=5){
                    if("1234567890.".includes(event.target.parentElement.id)){
                        secondNumber+=event.target.parentElement.id
                        document.getElementsByClassName("resultScreen")[0].firstChild.textContent = firstNumber + " " + operator + " " + secondNumber
                    }
                }
            }
        }
        //result
        if (firstNumber!="" && operator!=""&&secondNumber!=""){
            if (parent == "numberGrid" || clicked == "gridItem"){
                if(event.target.id=="="){
                    if(operator=="+"){
                        resultNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
                    }
                    if(operator=="-"){
                        resultNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
                    }
                    if(operator=="x"){
                        resultNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
                    }
                    if(operator=="÷"){
                        resultNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
                    }
                    if(isNaN(resultNumber)){
                        document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "Pelle..."
                    }else{
                        document.getElementsByClassName("resultScreen")[0].firstChild.textContent = resultNumber
                    }
                    firstNumber = "";
                    secondNumber = "";
                    resultNumber = 0;
                    operator = "";
                }
            }
            if (parent == "gridItem" || clicked == "p"){
                if(event.target.parentElement.id=="="){
                    if(operator=="+"){
                        resultNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
                    }
                    if(operator=="-"){
                        resultNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
                    }
                    if(operator=="x"){
                        resultNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
                    }
                    if(operator=="÷"){
                        resultNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
                    }
                    if(isNaN(resultNumber)){
                        document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "Pelle..."
                    }else{
                        document.getElementsByClassName("resultScreen")[0].firstChild.textContent = resultNumber
                    }
                    firstNumber = "";
                    secondNumber = "";
                    resultNumber = 0;
                    operator = "";
                }
            }
        }
    })
};

main();