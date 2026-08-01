//========================
// Partículas doradas
//========================

const fondo = document.querySelector(".particulas");

for(let i=0; i<80; i++){

    const p = document.createElement("span");

    p.classList.add("particula");

    p.style.left = Math.random()*100 + "%";

    p.style.animationDuration = (6 + Math.random()*8) + "s";

    p.style.animationDelay = Math.random()*8 + "s";

    p.style.opacity = Math.random();

    p.style.transform = `scale(${Math.random()+0.3})`;

    fondo.appendChild(p);

}



//========================
// Carta
//========================

const carta = `

Mi amor...

Soy consiente del error que cometí y del daño que te cause, 
no lo digo por decirlo ni para que suene bonito, 
lo digo porque lo entendí de verdad, 
porque me dolió darme cuenta de que fui yo quien lastimo 
a alguien que no lo merecía 

y hay cosas que uno no puede deshacer 
aunque quiera y esta es una de ella 
y aunque se que decir perdón no arregla nada por si solo, 

necesito que entiendas que no pasa un momento 
en donde no este pensando en lo que hice, 
en como te sentiste y en todo lo que pude haber hecho diferente,

 porque cuando alguien te importa de verdad 
el peso de a verle fallado no se va fácil

❤️

`;



const texto = document.getElementById("texto");

const boton = document.getElementById("continuar");

let i = 0;

function escribir(){

    if(i < carta.length){

        texto.innerHTML += carta.charAt(i);

        texto.scrollTop = texto.scrollHeight;

        i++;

        setTimeout(escribir,35);

    }

    else{

        boton.style.display="block";

        boton.style.animation="aparecerBoton 1.5s";

    }

}

setTimeout(escribir,1200);