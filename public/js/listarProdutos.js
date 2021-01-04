window.onload = function(){
    loadProdutos();

}
async function loadProdutos() {
    try {
        let servicos = await $.ajax({
            url: "/api/produto",
            method: "get",
            dataType: "json"
        });
        showProdutos(servicos);
        
    } catch(err) {
        let elemMain = document.getElementById("listarProdutos");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1>"+
                "<h2> Por favor tente mais tarde</h2>";
    }
} 
// Mostra a lista de serviços sem numeros.
function showProdutos(produtos) {
    let elemMain = document.getElementById("listarProdutos");
    let html ="<ul>";
    for (let produto of produtos) {
        html += "<li>"+produto.Nome+"</li>";
    }
    html += "</ul>";
    elemMain.innerHTML = html;
}

// Função para abrir outra pagina 
function showProdutos(idProdutos) {
    sessionStorage.setItem("idServicos",idProdutos);
    window.location = "servicos.html";
}