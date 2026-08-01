const texto = `

Cariño...

Si estas leyendo esto es porque si abriste el link
te recomiendo verlo en modo escritorio 
y tomarte un tiempo porque si es largo 

Si ves esto es porque si lo abriste 
recuerda
TE AMO,
TE QUIERO,
TE EXTRAÑOOO.

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