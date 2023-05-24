"use strict";

// Adicione um atributos a cada objto sendo eles:
// avatarUsuaro
// Deve conter a url da img de avatar do usuário.

let listaDeUsuarios = [
    {
        nomeCompleto : "José das Couves",
        avatarUsuario : "https://th.bing.com/th/id/R.550f49a459548599a5a4ea1c67fc0244?rik=ji0NKVGInUZxuw&pid=ImgRaw&r=0",
        nomeUsuario : "jose",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "João Paulino",
        avatarUsuario: "https://th.bing.com/th/id/R.c9f2adc2dbf7db8e22be33c3fb05e55f?rik=Ur0FF101t4iIBQ&riu=http%3a%2f%2fgoodyearsfamilymedicine.com%2fwp-content%2fuploads%2f2017%2f04%2fman.png&ehk=wn29XjGOKnI1HTRAspbH%2ff7x8qbfkeXz5twW1A1c%2bOE%3d&risl=&pid=ImgRaw&r=0",
        nomeUsuario : "joao",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Maria Tomaite",
        avatarUsuario: "https://cdn0.iconfinder.com/data/icons/office-icons-11/1052/Businessman-512.png",
        nomeUsuario : "maria",
        senhaUsuario : "123456"
    }
    ,
    {
        nomeCompleto : "Paulo da Selva",
        avatarUsuario: "https://ursc.ca/resources/build/images/male-avatar-1.png",
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

    let listaDeUsuariosRecuperada = JSON.parse(localStorage.getItem("listaUser"));

    if(evento.target.id == "btnSubmit"){

    try{
            listaDeUsuariosRecuperada.forEach((usuario)=>{

                if(usuarioLogado.nomeUsuarioLogado == usuario.nomeUsuario && usuarioLogado.senhaUsuarioLogado == usuario.senhaUsuario){
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