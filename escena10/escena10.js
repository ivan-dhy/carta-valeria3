const luces = document.querySelector(".luces");

const colores = [

"❤️",
"💖",
"💕",
"💗",
"💝"

];

for(let i=0;i<60;i++){

    const corazon=document.createElement("span");

    corazon.classList.add("corazon");

    corazon.innerHTML=colores[Math.floor(Math.random()*colores.length)];

    corazon.style.left=Math.random()*100+"%";

    corazon.style.fontSize=(15+Math.random()*25)+"px";

    corazon.style.animationDuration=(8+Math.random()*8)+"s";

    corazon.style.animationDelay=Math.random()*10+"s";

    luces.appendChild(corazon);

}



// Carta

const carta = `

Y ENTONCES DON BROMISTA Y DOÑA ENOJONA NO RENOVARON CONTRATO
Y BUENO AL FINAL CREO QUE NO VIVIRE ESE SUEÑO CONTIGO 
DE CASARNOS TENER UNA CASITA Y UNOS HIJOS MUY LINDOS 
QUE LLEVEN ESOS OJOS HERMOSOS QUE TIENES.

NO PUEDO DORMIR SABIENDO QUE SI NO HUBIERA HECHO
LO QUE HICE LO QUE DIJE ESTARIAMOS HACIENDO BROMAS TONTAS 
Y RIENDONOS HASTA QUEDARNOS DORMIDOS.



❤️

`;

let i=0;

function escribir(){

if(i<carta.length){

document.getElementById("texto").innerHTML+=carta.charAt(i);

i++;

setTimeout(escribir,35);

}else{

const boton=document.getElementById("continuar");

boton.style.display="block";

boton.style.animation="aparecer 1.5s forwards";

}

}

setTimeout(escribir,1200);