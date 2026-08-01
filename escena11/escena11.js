// Corazones

const fondo = document.getElementById("corazones");

const corazones=[

"💜","💖","💕","💗","💜","❤️"

];

for(let i=0;i<80;i++){

const c=document.createElement("span");

c.classList.add("corazon");

c.innerHTML=corazones[Math.floor(Math.random()*corazones.length)];

c.style.left=Math.random()*100+"%";

c.style.fontSize=(18+Math.random()*25)+"px";

c.style.animationDuration=(8+Math.random()*8)+"s";

c.style.animationDelay=Math.random()*10+"s";

fondo.appendChild(c);

}



// Carta

const carta=`

Antes de que el tiempo haga su trabajo y convierta nuestros recuerdos en simples historias,
quiero dejarte estas palabras. No para que me recuerdes siempre, porque nada es eterno, sino para que cuando pienses en nosotros, sepas que hubo un tiempo en el que dos almas se encontraron en medio 
de un mundo inmenso y decidieron caminar juntas.
fuimos 2 personas llenas de miedos, heridas y sueños incomprendidos.
Nos encontramos sin buscarnos y, sin darnos cuenta terminamos siendo refugio uno del otro.
Fuiste la voz que calmo algunos de mis silencios y yo intente ser el lugar donde  tus tormentas pudieran descansar.
Nos prometimos cosas que tal vez la vida nunca nos permitió cumplir. Hicimos planes que hoy solo existen en nuestra imaginación.
Y aunque el tiempo siga avanzando nadie podrá quitarle valor a todo lo que fuimos.
Porque amar a alguien no siempre significa quedarse para siempre.
A veces, amar también es aceptar que algunas personas llegan a nuestra vida para enseñarnos algo,
par cambiar nuestra forma de ver el mundo.
Y duele, duele muchísimo, porque uno nunca esta preparado para perder aquello que sentía como hogar.
Quizá algún día crucemos nuestras miradas y ya no seamos los mismos.
Tal vez nuestras manos ya no se reconozcan y nuestras voces suenen extrañas 

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