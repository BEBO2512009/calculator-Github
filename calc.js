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
}