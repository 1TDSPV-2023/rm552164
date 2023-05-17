"use strict";

let listaDeUsuarios = [
    {
        nomeCompleto : "José das Couves",
        nomeUsuario : "jose",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "João Paulino",
        nomeUsuario : "joao",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Maria Tomaite",
        nomeUsuario : "maria",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Paulo da Selva",
        nomeUsuario : "paulo",
        senhaUsuario : "123456"
    }
];

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evento)=>{
    // console.log(evento.target);
    
    let userInput = document.querySelector("#idUser");
    let passInput = document.querySelector("#idPass");

    let eyePass = document.querySelector("i")

    //MOSTRAR SENHA

    if(evento.target.className == "fa fa-eye" || evento.target.className == "fa fa-eye-slash"){ 
        evento.target.setAttribute("style", "cursor: pointer")
        if(passInput.getAttribute("type") == "password"){
            passInput.setAttribute("type", "text");
            eyePass.setAttribute("class", "fa fa-eye-slash")
        }
        else{
            passInput.setAttribute("type", "password");
            eyePass.setAttribute("class", "fa fa-eye")
        }
    }

    let listaDeUsuariosRecuperada = JSON.parse(localStorage.getItem("listaUser"))

    if(evento.target.id == "btnSubmit"){

    try{
            listaDeUsuariosRecuperada.forEach((usuario)=>{

            if(userInput.value == usuario.nomeUsuario && passInput.value == usuario.senhaUsuario){
                throw "Usuário Validado!"
            }
        });

        throw "Usuário ou Senha inválido!"

    }catch(err){
        if(err == "Usuário Validado!"){
            // Redirect
            window.location.href = "../sucesso.html"
        }else{
            console.log("Usuário ou Senha inválido!");
        }
    }
    }
});