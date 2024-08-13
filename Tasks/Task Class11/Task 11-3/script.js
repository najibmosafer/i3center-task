let btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    let number = prompt("Please enter a number:");

    number = parseInt(number, 10);

    let resultText;
    if (isNaN(number)) {
        resultText = "This is not a valid number.";
    } else if (number % 2 === 0) {
        resultText = number + " is an even number.";
    } else {
        resultText = number + " is an odd number.";
    }

    document.getElementById("result").innerText = resultText;
    }
)