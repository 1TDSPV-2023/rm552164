
if(localStorage.getItem("user-token") != null){
    const bemVindoEl = document.querySelector("#welcome-user");
    const botaoLogout = document.querySelector("#btn-sair");

    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    bemVindoEl.innerHTML = usuarioValidado.nomeCompleto;

    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("user-validado");
        localStorage.removeItem("user-token");
        window.location.href = "../login.html";
    });
}else{
    alert("Você precisa estar logado para acessar essa página!!")
    window,location,href - "../login.html"
}