 "use strict"; // بتعرف الحاجه فيها error وله لا 

const calculatorContainer = document.querySelector("#calculator-container");
const area = document.querySelector(".display-area");

calculatorContainer.addEventListener("click", e => {
    if (e.target.nodeName == "BUTTON"){
        switch(e.target.textContent){
            case "C":
                clear();
                break;
            case "DEL":
                deleteonevalue();
                break;
            case "=":
                evaluate();
                break;
            case "x²":
                squareNumber();
                break;
            case "x³":
                cubeNumber();
                break;
            case "√":
                squareRoot();
                break; 
            case "∛":
                cubeRoot();
                break; 
            default:
                addToDisplayarea(e.target.textContent);
        }
    }
 })



function clear(){
    area.textContent = "";
}

function addToDisplayarea(value) {
    area.textContent = area.textContent + value;
}

function deleteonevalue(){
    let currentContent = area.textContent;
    area.textContent = currentContent.substring(0, currentContent.length -1);

}

function evaluate() {
    try {
        let calculation = math.evaluate(area.textContent);
        area.textContent = calculation;
    } catch (error) {
       area.textContent = 'ERROR';
    }

 function squareNumber() {
    try {
        let num = parseFloat(area.textContent);
        if (isNaN(num)) throw Error();
        area.textContent = num ** 2;
    } catch {
        area.textContent = "ERROR";
    }
}

function squareRoot() {
    try {
        let num = parseFloat(area.textContent);
        if (isNaN(num) || num < 0) throw Error();
        area.textContent = Math.sqrt(num);
    } catch {
        area.textContent = "ERROR";
    }
}

function cubeNumber() {
    try {
        let num = parseFloat(area.textContent);
        if (isNaN(num)) throw Error();
        area.textContent = Math.pow(num, 3); // أو num ** 3
    } catch {
        area.textContent = "ERROR";
    }
}

function cubeRoot() {
    try {
        let num = parseFloat(area.textContent);
        if (isNaN(num)) throw Error();
        area.textContent = Math.cbrt(num).toFixed(6); // دقة 6 أرقام
    } catch {
        area.textContent = "ERROR";
    }
}




