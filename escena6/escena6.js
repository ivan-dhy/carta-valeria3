const estrellas = document.getElementById("estrellas");


for(let i=0;i<180;i++){


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



const mensaje = `

Cariño...

Después de todo lo que has leído,
quiero que recuerdes algo:

Llegaste a mi vida en un momento que no esperaba,
y poco a poco te convertiste en alguien demasiado importante para mí.

Gracias por cada sonrisa,
por cada momento,
y por todo lo bonito que compartimos.

`;


let i=0;


function escribir(){


if(i < mensaje.length){


document.getElementById("texto").innerHTML += mensaje.charAt(i);


i++;


setTimeout(escribir,55);


}


}



setTimeout(escribir,2500);