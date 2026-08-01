// Corazones cayendo

const fondo = document.getElementById("corazones");

const lista=[

"❤️",
"💖",
"💕",
"💜",
"💗"

];

for(let i=0;i<70;i++){

let c=document.createElement("span");

c.classList.add("corazon-fondo");

c.innerHTML=lista[Math.floor(Math.random()*lista.length)];

c.style.left=Math.random()*100+"%";

c.style.fontSize=(15+Math.random()*25)+"px";

c.style.animationDuration=(8+Math.random()*10)+"s";

c.style.animationDelay=Math.random()*10+"s";

fondo.appendChild(c);

}