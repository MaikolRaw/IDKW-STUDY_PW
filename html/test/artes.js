//arreglo que contiene las respuestas correctas

let correctas = [1,1,1,1,1]

//arreglo guardas respuestas 

let opcion_elegida =[];

let cantidad_correctas=0;
//funcion numero preguntas input elegidas//

function respuesta(num_pregunta, seleccionada){

//guarda las respuestas elegidas//

opcion_elegida[num_pregunta] = seleccionada.value;


id="p" + num_pregunta;

labels=document.getElementById(id).childNodes;

labels[3].style.backgroundColor = "White";
labels[5].style.backgroundColor = "White";
labels[7].style.backgroundColor = "White";
labels[9].style.backgroundColor = "White";

seleccionada.parentNode.style.backgroundColor = "#cec0fc";


}

function corregir() {

cantidad_correctas=0;
for (i=0; i<correctas.length; i++) {
    if (correctas[i]==opcion_elegida[i]){
        cantidad_correctas++;
    }

}

documen.getElementByIdt("resultado").innerHTML = cantidad_correctas;

}