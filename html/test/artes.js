//arreglo que contiene las respuestas correctas//

let correctas = [1,1,1,1,1]

//arreglo guardas respuestas 

let opcion_elegida =[];

let cantidad_correctas=0;
//funcion numero preguntas input elegidas//

function respuesta(num_pregunta, seleccionada){

//guarda las respuestas elegidas//

opcion_elegida[num_pregunta] = seleccionada.value;

}