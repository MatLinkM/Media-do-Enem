function media() {
    var notaNatureza = document.getElementById("notaNat").value;
    var notaHumanas = document.getElementById("notaHum").value;
    var notaMatematica = document.getElementById("notaMat").value;
    var notaLinguagens = document.getElementById("notaLin").value;
    var notaRedaçao = document.getElementById("notaReda").value;
    
    var notaNat = parseFloat(notaNatureza);
    var notaHum = parseFloat(notaHumanas);
    var notaMat = parseFloat(notaMatematica);
    var notaLin = parseFloat(notaLinguagens);
    var notaReda = parseFloat(notaRedaçao);

    var peso1 = document.getElementById("peso1").value;
    var peso2 = document.getElementById("peso2").value;
    var peso3 = document.getElementById("peso3").value;
    var peso4 = document.getElementById("peso4").value;
    var peso5 = document.getElementById("peso5").value;

    var p1 = parseInt(peso1);
    var p2 = parseInt(peso2);
    var p3 = parseInt(peso3);
    var p4 = parseInt(peso4);
    var p5 = parseInt(peso5);

    var media = (((notaNat * p1) + (notaHum * p2) + (notaMat * p3) + (notaLin * p4) + (notaReda * p5))/(p1 + p2 + p3 + p4 + p5));
        alert("Sua média no Enem 2016 foi " + media);
}
