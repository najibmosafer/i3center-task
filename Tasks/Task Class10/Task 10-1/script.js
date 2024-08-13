let box = document.getElementById("box")
let range_r = document.getElementById("range_r")
let range_g = document.getElementById("range_g")
let range_b = document.getElementById("range_b")

range_r.addEventListener("input", color_ch)
range_g.addEventListener("input", color_ch)
range_b.addEventListener("input", color_ch)

function color_ch(){
    box.style.backgroundColor = `rgb(${range_r.value},${range_g.value}, ${range_b.value})`
}