
window.onload = async function() {
    let idProduto = sessionStorage.getItem("idProduto");

    let produto = await $.ajax({
        url: "/api/produto/"+idProduto,
        method: "get",
        dataType: "json"
    });
    console.log(produto);

    if (produto.fertelizante != null){
        document.getElementById("fertilizante").src = produto.fertilizante;
    }

    document.getElementById("Nome").innerHTML = produto.Nome;
    document.getElementById("nome").innerHTML = album.Nome;

    let html = "";
    for (let info of produto.infos){
        html +="<p>"+info.Nome+" - "+info.Preco+" €</P>";
    }
    document.getElementById("infos").innerHTML = html
}