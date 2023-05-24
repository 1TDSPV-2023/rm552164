
// 

if(localStorage.getItem("user-token") != null){
    const bemVindoEl = document.querySelector("#welcome-user");
    const avatar = document.querySelector("#avatar");
    const botaoLogout = document.querySelector("#btn-sair");

    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    const imgAvatar = document.querySelector("#img-avatar");
    imgAvatar.src = usuarioValidado.avatarUsuario;
    imgAvatar.alt = usuarioValidado.nomeCompleto;
    imgAvatar.title = usuarioValidado.nomeUsuario;

    const legendaAvatar = document.querySelector("#legenda")
    legendaAvatar.textContent = usuarioValidado.nomeCompleto

    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("user-validado");
        localStorage.removeItem("user-token");
        window.location.href = "../login.html";
    });
}else{
    alert("Você precisa estar logado para acessar essa página!!")
    window,location,href - "../login.html"
}