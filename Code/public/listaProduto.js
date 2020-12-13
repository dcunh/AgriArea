window.onload = function(){
    loadProduto();
}

async function loadProduto(){
    try {
        let produto = await $.ajax({
            url: "/api/produto",
            method: "get",
            dataType: "json"
        });
        showProduto(produto);
    } catch(err) {
        let elemProduto = document.getElementById("produto");
        console.log(err);
        elemProduto.innerHTML = "<h1> Página não está disponivel</P>"+
                    "<h2> Por favor tente mais tarde</h2>";
    }
}

function showProduto(produto){
    let elemProduto = document.getElementById("produto");
    let html ="";
    for (let produto of produto) {
        html +="<section onclick='showProduto("+produto.idProduto+")'>"+
        "<h3>"+produto.Nome+"</h3>"+
        "<p> Fertilizaante: "+produto.Nome+"</p></section>"; 
    }
    elemProduto.innerHTML = html;
   }