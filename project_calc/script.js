let btn_start_calc = document.getElementById("btn_calc");
let popupForm = document.getElementById("popupForm");
let closePopup = document.getElementById("closePopup");

btn_start_calc.addEventListener("click", function () {
    if (popupForm.classList.contains('show')) {
        btn_start_calc.innerHTML = '🧮';
        popupForm.classList.remove('show');
    } else {
        btn_start_calc.innerHTML = '💻';
        popupForm.classList.add('show');
    }
});

closePopup.addEventListener("click", function () {
    popupForm.classList.remove('show');
    btn_start_calc.innerHTML = '🧮';
});

window.addEventListener("click", function (event) {
    if (event.target === popupForm) {
        popupForm.classList.remove('show');
        btn_start_calc.innerHTML = '🧮';
    }
});