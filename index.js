const themeOne = document.querySelector("#theme__one");
const themeTwo = document.querySelector("#theme__two");
const themeThree = document.querySelector("#theme__three");
const body = document.body;
const result = document.querySelector("#result")
const del = document.querySelector("#delete");
const reset = document.querySelector("#reset");
const operators = document.querySelectorAll(".operators")
const displayResult = document.querySelector("#showResults");

//THEMES
themeOne.addEventListener("click" , () => {
    body.classList.remove("theme-2", "theme-3");
} );

themeTwo.addEventListener("click" , () => {
    body.classList.remove("theme-3")
    body.classList.add("theme-2");
} );

themeThree.addEventListener("click" , () => {
    body.classList.remove("theme-2")
    body.classList.add("theme-3");
} );


// OPERATION
const calc = (a , b, operator) => {
    if (operator === "+") {
         return a + b
    };
    if (operator === "-") {
         return a - b
    };
    if (operator === "/") {
         return a / b
    };
    if (operator === "x") {
         return a * b
    };
};

const calculate = () =>{
    let answer;

    result.textContent = answer;
    return answer;
}

//APPEND VALUES
function appendValue(val) {
    result.textContent += val;
    result.scrollLeft = result.scrollWidth;
}
const appendOperator = (op) => {

}

//ACTIONS
del.addEventListener("click" , () => {
    result.textContent = result.textContent.slice(0, -1);
})
reset.addEventListener("click" , () => {
    result.textContent = '';
})
result.addEventListener("click" , () => {
    result.textContent = calc(num1, num2, operator);
})
displayResult.addEventListener("click" , () => {
    let parts = result.textContent.split(/([+\-x/])/);

    let num1 = parseInt(parts[0]);
    let operator = parts[1];
    let num2 = parseInt(parts[2]);

    result.textContent = calc(num1, num2, operator);
})