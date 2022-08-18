
//some crucial variables
let resultScreenOn = false;
let firstNumber = ""
let secondNumber = ""
let resultNumber = 0

// main function
function main(){
    document.addEventListener("click", function (e) {
        parent = e.target.parentElement.className;
        clicked = e.target.className;
        //resultscreen color and text changer
        if (parent == "onOff" || clicked == "onOff") {
            if (resultScreenOn == true) {
                resultScreenOn = false
                firstNumber = "0";
                secondNumber = "0";
                resultNumber = 0;
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
        }
        //first number
       if (parent == "numberGrid" || clicked == "gridItem") {
            if (document.getElementsByClassName("resultScreen")[0].firstChild.textContent == "Copyright © Mikko Malm 2022") {
                document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "";
            }
            if (firstNumber.length <= 5){
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
            if(firstNumber.length<=5){
                if("1234567890.".includes(event.target.parentElement.id)){
                    firstNumber+=event.target.parentElement.id
                    document.getElementsByClassName("resultScreen")[0].firstChild.textContent = firstNumber
                }
            }
        }
    })
};

main();