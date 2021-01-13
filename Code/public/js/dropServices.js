window.onload = function(){
    loadServicos();

}
async function loadServicos() {
    try {
        let servicos = await $.ajax({
            url: "/api/servicos",
            method: "get",
            dataType: "json"
        });
        showServicos(servicos);

    } catch(err) {
        let elemMain = document.getElementById("listarServicos");
        console.log(err);
        elemMain.innerHTML = "<h1> Página não está disponível</h1><h2> Por favor tente mais tarde</h2>";
    }
} 

// Mostra a lista de serviços sem numeros.
function showServicos(servicos) {
    let elemMain = document.getElementById("dropDownServico");
    let html ='<select type="text" class="form-control search-slt" id="listarServicos" placeholder="Serviços">';
    html += "<option selected disabled hidden>Serviços</option>"
    for (let servico of servicos) {
        html += "<option>"+servico.Nome+"</option>";
    }
    html += "</select>";
    elemMain.innerHTML = html;
}

// Função para abrir outra pagina 
function showServico(idServicos) {
    sessionStorage.setItem("idServicos",idServicos);
    window.location = "servico.html";
}