const estrellas = document.getElementById("estrellas");


for(let i=0;i<150;i++){

let estrella=document.createElement("div");

estrella.classList.add("estrella");

let tamaño=Math.random()*3;

estrella.style.width=tamaño+"px";
estrella.style.height=tamaño+"px";

estrella.style.left=Math.random()*100+"%";
estrella.style.top=Math.random()*100+"%";

estrella.style.animationDelay=Math.random()*5+"s";

estrellas.appendChild(estrella);

}



// FECHA EN QUE SE CONOCIERON

const inicio = new Date("2024-02-22");



function actualizarTiempo(){


const ahora = new Date();


let diferencia = ahora - inicio;



let segundos = Math.floor(diferencia / 1000);

let minutos = Math.floor(segundos / 60);

let horas = Math.floor(minutos / 60);

let dias = Math.floor(horas / 24);



let años = Math.floor(dias / 365);


let meses = Math.floor((dias % 365) / 30);


dias = dias % 30;



document.getElementById("años").innerHTML=años;

document.getElementById("meses").innerHTML=meses;

document.getElementById("dias").innerHTML=dias;

document.getElementById("horas").innerHTML=horas % 24;

document.getElementById("minutos").innerHTML=minutos % 60;

document.getElementById("segundos").innerHTML=segundos % 60;


}



actualizarTiempo();


setInterval(actualizarTiempo,1000);