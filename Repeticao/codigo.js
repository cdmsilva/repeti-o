function gerar(){
    var frase = document.getElementById("textfrase").value;
    var resultado = "";
    for (var i = 0; i < 10; i++) {
        
        resultado += frase + "<br>";
    }
    document.getElementById("repetir").innerHTML = resultado;
}
