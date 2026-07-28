const texto = `

Cariño...

No sé exactamente cómo empezar esta carta,
porque hay sentimientos que son demasiado grandes
para explicarlos con simples palabras.

Quiero que sepas que desde el momento en que llegaste
a mi vida algo cambió en mí.

Gracias por cada sonrisa,
cada momento,
cada recuerdo que hemos creado juntos.

Eres una persona muy especial para mí
y siempre voy a guardar con cariño
todo lo que vivimos.

Si lees esto es porque llegaste 
a intentar ver el link y si cargo,
bueno 
te amo 
te quiero 
te voy a extrañar
cuidate mucho cariño.

`;



let i=0;


function escribir(){

if(i < texto.length){

document.getElementById("texto").innerHTML += texto.charAt(i);

i++;

setTimeout(escribir,50);

}
else{

document.getElementById("continuar").style.display="inline-block";

}

}


setTimeout(escribir,1500);
