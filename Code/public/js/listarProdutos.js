window.onload = function(){
    loadProdutos();

}
async function loadProdutos() {
    try {
      //  let productID = sessionStorage.getItem("productID");
    //    console.log(productID);
        let produtos = await $.ajax({
            url: "/api/produtos",
            method: "get",
            dataType: "json"
        });
       showProdutos(produtos);

    } catch(err) {
        let elemMain = document.getElementById("listarProdutos");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1><h2> Por favor tente mais tarde</h2>";
    }
} 

// Mostra a lista de serviços sem numeros.
function showProdutos(produtos) {
    let elemMain = document.getElementById("listarProdutos");
    let html ='<select type="text" class="form-control search-slt" name="listarProdutos" placeholder="Produtos">';
    html += '<option value="/index.html" selected disabled hidden>Produtos</option>'
    for (let produto of produtos) {
        html += '<option >'+produto.Nome+'</option>';
    }
    html += "</select>";
    elemMain.innerHTML = html;
}

// Função para abrir outra pagina 
function showProduto(idProdutos) {
    sessionStorage.setItem("idProdutos",idProdutos);
    window.location = "produto.html";
}