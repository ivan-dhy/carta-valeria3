const galeria = document.getElementById("galeria");


const frases = [

"El comienzo de una historia muy bonita ❤️",

"Un momento que siempre voy a recordar",

"Gracias por todo lo que me das",

"Cada instante contigo fue especial",

"Una pequeña foto, un gran recuerdo",

"Me quedo con todos los momentos felices",

"Gracias por dejarme conocer tu corazón",

"Siempre recordaré estos días contigo",

"Un recuerdo que guardaré para siempre",

"Gracias por formar parte de mi vida ❤️",

"Nuestro primer hijo",

"TE AMO 3 MILLONES ❤️ "

];


for(let i=1;i<=12;i++){


let foto=document.createElement("div");


foto.classList.add("foto");


foto.innerHTML=`

<img src="../imagenes/foto${i}.jpg">

<p>
${frases[i-1]}
</p>

`;


galeria.appendChild(foto);


}