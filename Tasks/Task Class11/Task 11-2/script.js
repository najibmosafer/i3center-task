let btn = document.getElementById("button")

btn.addEventListener("click", function () {
    let number_1 =+ document.getElementById("number_1").value
    let number_2 =+ document.getElementById("number_2").value
    let number_3 =+ document.getElementById("number_3").value
    let finish = document.getElementById("finish")

    switch (true) {
        case (number_1 > number_2 && number_1 > number_3):
            finish.textContent = number_1;
            break;
        case (number_2 > number_1 && number_2 > number_3):
            finish.textContent = number_2;
            break;
        default:
            finish.textContent = number_3;
            break;
    }

})