const sobre = document.getElementById("sobre");

sobre.addEventListener("click",()=>{

sobre.classList.add("open");

setTimeout(()=>{

window.location.href="../escena3/escena3.html";

},3200);

});