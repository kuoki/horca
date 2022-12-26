//S = {'alura'} Conjuntos cadenas de texto
//E = (1,2,3,4,6,7,8) conjunto de estados el n mayor esta más cerca de ganar y el menor de perder
//Prox(x) = x-1 como llegar al número
//G = Ganado
//P = Perdido
//I = Iniciado

;(function(){
"use estrict"
    var juego = {
        palabra: "ALURA",
        estado: 1,
        adivinado: ["A", "L"],
        errado:["B", "J", "K", "C"]
    }
    var $html = {
    sujeto: document.getElementById("sujeto"),
    adivinado: document.querySelector(".adivinado"),
    errado: document.querySelector(".errado")

}
    function dibujar(juego){
    //Actualizar la imagen del sujeto
    var $elem
    $elem = $html.sujeto
    $elem.src = '/recursos/imgs/estados/0' + juego.estado + '.png'
    
    //Creando letras adivinadas
    var palabra = juego.palabra
    var adivinado = juego.adivinado
    $elem = $html.adivinado
    for (let letra of palabra){
    $span = document.createElement("span")
    $txt = document.createTextNode("")
    if(adivinado.indexOf(letra)>= 0){
    $txt.nodeValue = letra
}
    $span.setAttribute("class", "letra adivinada")
    $span.appendChild($txt)
    $elem.appendChild($span)
}
    //Creando letras erradas
    var errado = juego.errado
    $elem = $html.errado
    for (let letra of errado){
    let $span = document.createElement("span")
    let $txt = document.createTextNode(letra)
    $span.setAttribute("class", "letra errada")
    $span.appendChild($txt)
    $elem.appendChild($span)

    }

}



    console.log(juego)
    dibujar(juego)
}())

