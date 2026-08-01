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

Perdón por no haberte cuidado cuando todavía estabas. 
Perdón por hacerte sentir que irte era la única manera de estar en paz.
Te extraño mas de lo que las palabras pueden decir, 
y aunque se que quizás ya no hay un regreso para nosotros, 

una parte de mi siempre va a guardar la esperanza 
de que algún día puedas recordar todo lo bueno antes que todo el daño que te hice.
Lo que mas duele no es que te hayas ido, sino que yo te di motivos para hacerlo. 
A veces quisiera regresar el tiempo solo para cambiar aquellas palabras que dije, 

aquellas actitudes que tuve y todos los momentos en los que no supe cuidar lo que tenia.

La cague lo se. y no hay día en donde no piense en lo que pude haber hecho diferente, daría lo que fuera por regresar el tiempo, por volver a esos momentos en los que tenia la oportunidad de cambiar las cosas.

Nunca deje de amarte y ni lo hare.


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