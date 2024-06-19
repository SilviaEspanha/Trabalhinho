
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        myFunction(this);
    }
    xhttp.open("GET", "xml/precos2024.xml");
    xhttp.send();
}
function myFunction(xml) {      
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("SERVICO");
    let table = "<tr><th>Serviço</th><th>Preço (R$)</th></tr>";
    for (let i = 0; i <x.length; i++) { 
        table += "<tr><td>" + x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue +
                "</td><td>" + x[i].getElementsByTagName("PRECO")[0].childNodes[0].nodeValue +
                "</td></tr>";
    }
    document.getElementById("precos").innerHTML = table;
}
/*
	function calculapeso()
	{
		var altura=ficha.altura.value;
		var sexo=ficha.sexo.value;

		if (sexo=='masculino')
			pesoideal= (72.7*altura)-58;
		else 
			pesoideal=(62.1*altura)- 44.7;
		ficha.pesoideal.value=Math.round(pesoideal);
		return true;
	}
*/
