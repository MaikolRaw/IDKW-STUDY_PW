//arreglo que contiene las respuestas correctas

let correctas = [1,1,1,1,1,1,1,1,1,1];

//arreglo guardas respuestas 

let opcion_elegida =[];

let cantidad_correctas=0;
//funcion numero preguntas input elegidas//

function respuesta(num_pregunta, seleccionada){

//guarda las respuestas elegidas//

opcion_elegida[num_pregunta] = seleccionada.value;

id="p" + num_pregunta;

labels=document.getElementById(id).childNodes;

labels[3].style.backgroundColor = "white";
labels[5].style.backgroundColor = "white";

seleccionada.parentNode.style.backgroundColor = "skyblue";


}

function corregir() {

cantidad_correctas=0;
for (i=0; i<correctas.length; i++) {
    if (correctas[i]==opcion_elegida[i]){
        cantidad_correctas++;
    }

}

document.getElementById("resultado").innerHTML = cantidad_correctas;

if (cantidad_correctas<=4) {
    baja="Tienes una compatibilidad muy BAJA. Deberias considerar realizar otros TEST:"
    document.getElementById("rp1").innerHTML=baja;

}


if (cantidad_correctas>=6){

    alta="Psicología, trabajo social, idiomas, educación internacional, historia y geografía, periodismo, periodismo digital, derecho, ciencias políticas, sociología, antropología, arqueología, gestión social y desarrollo, consejería familiar, comunicación y publicidad, administración educativa, educación especial, psicopedagogía, estimulación temprana, traducción simultánea, lingüística, educación de párvulos, bibliotecología, relaciones internacionales y diplomacia, comunicación social y gestión de empresas, redacción creativa y publicitaria, relaciones públicas y comunicación organizacional, hotelería y turismo, teología, institución sacerdotal";

    document.getElementById("rp1").innerHTML=alta;

}


}