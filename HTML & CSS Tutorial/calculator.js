let firstInput = document.getElementById("first_input");
let secondInput = document.getElementById("second_input");
let operator = document.getElementById("operator");
let submitButton = document.getElementById("submit")
let output = document.getElementById("output")


function handleOperation(operation) {
    operator.innerHTML = operation;
}


const handleSubmit = () => {
    let a = Number(firstInput.value);
    let b = Number(secondInput.value);
    let ans;

    switch (operator.innerHTML) {
        case "+":
            ans = a + b;
            break;
        case "-":
            ans = a - b;
            break;
        case "*":
            ans = a * b;
            break;
        case "/":
            ans = a / b;
            break;
    }

    output.value = ans;
}

submitButton.addEventListener("click", handleSubmit)
