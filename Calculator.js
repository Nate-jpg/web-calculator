

function calc() {
    var a = parseInt(document.querySelector("#num1").value);
    var b = parseInt(document.querySelector("#num2").value);

    var oper = document.querySelector("#operator").value;
    var result;

    if (oper == "add") {
        result = a + b;
    } else if (oper == "sub") {
        result = a - b;
    } else if (oper == "mul") {
        result = a * b;
    } else if (oper == div) {
        result = a / b;
    }

    document.querySelector("#answer").innerHTML = result;
}