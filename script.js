
//some crucial variables

resultScreenOn = false;

function main(){
    document.addEventListener("click", function (e) {
        parent = e.target.parentElement.className;
        clicked = e.target.className;
        //resultscreen color and text changer
        if (parent == "onOff" || clicked == "onOff") {
            if (resultScreenOn == true) {
                resultScreenOn = false
                document.getElementsByClassName("resultScreen")[0].style.backgroundColor = "#556B2F";
                document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "";
            } else {
                resultScreenOn = true;
                document.getElementsByClassName("resultScreen")[0].style.backgroundColor = "greenyellow";
                document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "Copyright © Mikko Malm 2022";
            }
        }
        if(parent == "clear" || clicked == "clear") {
            document.getElementsByClassName("resultScreen")[0].firstChild.textContent = "";
        }
    })
}

main();