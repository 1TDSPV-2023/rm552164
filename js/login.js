"use strict";

// Criando objetos:

const usuario1 = {
    nomeUsuario : "rita-lee",
    senhaUsuario : "00000"
}

const usuario2 = {
    nomeUsuario : "ptt01",
    senhaUsuario : "12345"
}

usuario2.nomeUsuario = "Juquinha"

// lista de usuarios

let listaDeUsuarios = []
listaDeUsuarios.push(usuario1)
listaDeUsuarios.push(usuario2)

addEventListener("click", (evento)=>{
    // console.log(evento.target);
    
    let userInput = document.querySelector("#idUser");
    let passInput = document.querySelector("#idPass");

    if(evento.target.id == "btnSubmit"){

    try{
            listaDeUsuarios.forEach((usuario)=>{

            if(userInput.value == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario){
                throw "Usuário Validado!"
            }
        });

        throw "Usuário ou Senha inválido!"

    }catch(err){
        if(err == "Usuário Validado!"){
            console.log("Usuário Validado!");
        }else{
            console.log("Usuário ou Senha inválido!");
        }
    }
    }
});