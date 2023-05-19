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

    const usuarioLogado = {
        nomeUsuarioLogado : userInput.value,
        senhaUsuarioLogado : passInput.value
    }

    let usuarioValidado = {};

    let listaDeUsuariosRecuperada = JSON.parse(localStorage.getItem("listaUser"))

    if(evento.target.id == "btnSubmit"){

    try{
            listaDeUsuariosRecuperada.forEach((usuario)=>{

            if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuarioLogado && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuarioLogado){
            usuarioValidado = usuario;
                throw "Usuário Validado!"
            }
        });

        throw "Usuário ou Senha inválido!"

    }catch(err){

        const msgStatus = document.querySelector("#info");

        if(err == "Usuário Validado!"){
            msgStatus.setAttribute("style", "color:#00ff00");
            msgStatus.innerHTML = `<span><strong>O usuárioo ${usuarioValidado.nomeCompleto} realizou o login com sucesso!!</strong></span>`
            
            localStorage.setItem("user-validado", JSON.stringify(usuarioValidado));

            let token = Math.random().toString(16).substring(2);
            localStorage.setItem("user-token", token);

            // Redirect
            setTimeout(()=>{
                window.location.href = "../sucesso.html"
            },3000);
            
        }else{
            msgStatus.setAttribute("style", "color:#ff0000");
            msgStatus.innerHTML = `<span><strong>Nome do usuário ou senha inválido...</strong></span>`
        }
    }
    }
});