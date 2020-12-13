window.onload = async function(){
    try{
        let produto = await $.ajax({
            url: "/api/produto",
            method: "get",
            dataType: "json"
        });
        let html="";
        for (let produto of produto){
            html += "<option value="+idProduto+">"+produto.Nome+"</ption";

        }
        document.getElementById("produto").innerHTML = html;
    } catch (err) {
        console.log(err);
        // mensagem de erro para utilizador
    }
}

async function addProduto(){
    try {
        let produto = {
            Nome: document.getElementById("Nome").value,
            Preco: document.getElementById("Preco").value,
            idProduto: parseInt(document.getElementById("produto").value)
        }
        alert(JSON.stringify(produto));
        let result = await $.ajax({
            url: "/api/produto",
            method: "post",
            dataType: "json",
            data: JSON.stringify(produto),
            contentType: "application/json"
        });
        alert(JSON.stringify(result));
    } catch(err) {
        console.log(err);
        // Mensagem para o utilizador
    }
}