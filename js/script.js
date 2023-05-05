// let nr1 = 10
// let nr2 = 5

// let resultado = !(nr1 % nr2) ? "PAR" : "IMPAR"

// console.log(resultado)

// const menu = document.getElementById("menu")

// console.log(menu.textContent)




// let frutas = ["laranja", "banana", "acerola", "abacate", "caqui", "uva"]

// // adiciona no fianl
// frutas.push("kiwi")
// // adiciona no inicio
// frutas.unshift("melancia")
// // remover no fianl
// frutas.pop()
// // remover no inicio
// frutas.shift()

// // buscar elementos
// let fruta = frutas.indexOf("abacate")
// // remover um item específico
// frutas.splice(fruta, 1) 




// let frutas = ["laranja", "banana", "acerola", "abacate", "caqui", "uva"]

// // For
// for(let x = 0; x < frutas.length; x++){
//     console.log(x)
// }
// // For of
// for (const fruta of frutas){
//     console.log(fruta)
// }
// // For in
// for(const indice in frutas){
//     console.log(frutas[indice])
// }
// // Map
// frutas.map((fruta, key)=>{
//     console.log(`Fruta nr${key + 1} ${fruta}`);
// });

const inputUser = document.querySelector("#idUser");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color:#ff0000;");
});



