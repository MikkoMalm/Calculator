
//some crucial variables
let resultScreenOn = false;
let firstNumber = 0


// main function
function main(){
    document.addEventListener("click", function (e) {
        parent = e.target.parentElement.className;
        clicked = e.target.className;
        //resultscreen color and text changer
        if (parent == "onOff" || clicked == "onOff") {
            if (resultScreenOn == true) {
                resultScreenOn = false
                firstNumber = 0;
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
            firstNumber = 0;
        }
    })
};

main();