
//esta funcao nao esta funcionando
function lerPreco(nomeServico) {      
    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) { 
            var xmlDoc = this.responseXML; 
            var nomes = []; 
            var precos = []; 
            var servicos = xmlDoc.getElementsByTagName("SERVICO"); 
            for (var i = 0; i < servicos.length; i++) { 
                nomes.push(servicos[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue); 
                precos.push(servicos[i].getElementsByTagName("PRECO")[0].childNodes[0].nodeValue); 
            } 
            console.log("Nomes: " + nomes); 
            console.log("Preços: " + precos); 
        } 
    }; 
    xhttp.open("GET", "XML/PRECOS2024.xml", true); 
    xhttp.send(); 
    
    var preco = precos[0];
    for (var i = 0; i < nomes.length; i++) {
        if (nomes[i] == nomeServico)
            preco = precos[i];
    }
    console.log("Preco: " + preco);
}

function geraResult(){
    var nometut = document.getElementById("nomet").value;
    var nomepet = document.getElementById("nomep").value;
    var data = document.getElementById("data").value;
    var servico = document.getElementById("servico").value;
    var obs = document.getElementById("obs").value;
    var preco = 30;
    if (servico=="banho") servicoNome = "Banho";
    if (servico=="tosah") servicoNome = "Tosa Higiênica";
    if (servico=="tosagm") servicoNome = "Tosa Geral (máquina)";
    if (servico=="tosagt") servicoNome = "Tosa Geral (tesoura)";
    if (servico=="creched") servicoNome = "Creche (diária avulsa)";
    if (servico=="creches") servicoNome = "Creche (semanal)";
    if (servico=="crechem") servicoNome = "Creche (mensal)";
    if (servico=="levatraz") servicoNome = "Leva e Traz (km rodado)";
    //var preco = lerPreco(servicoNome);
    let result = [nometut, nomepet, data, servicoNome, obs, preco];
    return result;
}

function exibir(){
    let result = geraResult();
    let stringResultado = "Tutor: " + result[0] + "<br>" + "Pet: " + result[1] + "<br>" +
    "Data: " + result[2] + "<br>" + "Serviço: " + result[3] + "<br>" + result[4] +
    "<br>" + "Valor: R$ " + result[5].toFixed(2) + "<br><br>";

    document.getElementById("result").innerHTML = stringResultado;
    document.getElementById("Gravar").disabled = false;
}

function descartar(){
    let resultado = " ";
    document.getElementById("Gravar").disabled = true;
    document.getElementById("result").innerHTML = resultado;
}


