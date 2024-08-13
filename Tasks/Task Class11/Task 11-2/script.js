let btn = document.getElementById("button")

btn.addEventListener("click", function () {
    let number_1 =+ document.getElementById("number_1").value
    let number_2 =+ document.getElementById("number_2").value
    let selectop = document.getElementById("select").value
    let finish = document.getElementById("finish")

    if (selectop == "+") {
        finish.textContent = number_1 + number_2
    }
    else if (selectop == "-") {
        finish.textContent = number_1 - number_2
    }
    else if (selectop == "*") {
        finish.textContent = number_1 * number_2
    }
    else(finish.textContent = number_1 / number_2)     
})