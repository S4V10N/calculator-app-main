const themeOne = document.querySelector("#theme__one");
const themeTwo = document.querySelector("#theme__two");
const themeThree = document.querySelector("#theme__three");
const body = document.body;
const result = document.querySelector("#result");
const del = document.querySelector("#delete");
const reset = document.querySelector("#reset");
const displayResult = document.querySelector("#showResults");
const operators = document.querySelectorAll(".operators");

// === LOAD SAVED THEME ===
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
}

// === THEME BUTTONS ===
themeOne.addEventListener("click", () => {
    body.classList.remove("theme-2", "theme-3");
    localStorage.setItem("theme", "theme-1");
});

themeTwo.addEventListener("click", () => {
    body.classList.remove("theme-3");
    body.classList.add("theme-2");
    localStorage.setItem("theme", "theme-2");
});

themeThree.addEventListener("click", () => {
    body.classList.remove("theme-2");
    body.classList.add("theme-3");
    localStorage.setItem("theme", "theme-3");
});

// === CALC FUNCTION (unused but kept from original) ===
const calc = (a, b, operator) => {
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "/") return a / b;
    if (operator === "x") return a * b;
};

// === APPEND VALUES ===
function appendValue(val) {
    if (
        result.textContent === "Syntax Error" ||
        result.textContent === "Division by zero"
    ) {
        result.textContent = "";
    }

    const opers = ["+", "-", "x", "/"];
    const lastChar = result.textContent.slice(-1);

    // Prevent two operators in a row
    if (opers.includes(lastChar) && opers.includes(val)) {
        return;
    }

    result.textContent += val;
    result.scrollLeft = result.scrollWidth;
}

// === ACTIONS ===
del.addEventListener("click", () => {
    result.textContent = result.textContent.slice(0, -1);
});

reset.addEventListener("click", () => {
    result.textContent = "";
});

// === CALCULATE ===
displayResult.addEventListener("click", () => {
    try {
        let expression = result.textContent;

        // Replace "x" with "*" for multiplication
        expression = expression.replace(/x/g, "*");

        // Only allow safe characters
        if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
            throw new Error("Syntax Error");
        }

        // Evaluate expression safely
        let answer = Function('"use strict"; return (' + expression + ")")();

        // Handle division by zero
        if (!isFinite(answer)) {
            throw new Error("error");
        }

        result.textContent = answer;
    } catch (e) {
        result.textContent = e.message;
    }
});
