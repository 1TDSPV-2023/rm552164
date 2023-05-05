const botao1 = document.getElementById("button1")
const botao2 = document.getElementById("button2")
const corpo = document.querySelector("body")

function mudaCorAzul() {
    corpo.style.backgroundColor = "blue";
}
function mudaCorBranco() {
    corpo.style.backgroundColor = "white";
}

botao1.addEventListener("click", mudaCorAzul);
botao2.addEventListener("click", mudaCorBranco);