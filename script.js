const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

let star=document.createElement("div");

star.classList.add("star");

let size=Math.random()*3;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}

