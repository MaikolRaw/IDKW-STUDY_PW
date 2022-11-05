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


if (cantidad_correctas>=5){

    alta="Diseño gráfico, diseño y decoración de interiores, diseño de jardines, diseño de modas, diseño de joyas, artes plásticas (pintura, escultura, danza, teatro, artesanía, cerámica), dibujo publicitario, restauración y museología, modelaje, fotografía, gestión gráfica y publicitaria, locución y publicidad, actuación, camarógrafa, arte industrial, producción audiovisual y multimedia, comunicación y producción en radio y televisión, diseño del paisaje, cine y video,comunicación escénica para televisión, música";

    document.getElementById("rp1").innerHTML=alta;

}


}
