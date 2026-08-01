const estrellas = document.getElementById("estrellas");


for(let i=0;i<200;i++){


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



const texto = `

Gracias por haber llegado a mi vida.

Gracias por cada sonrisa,
cada recuerdo,
cada momento que me hizo feliz.

No sé qué nos depare el futuro,
pero siempre voy a estar agradecido
por haber conocido a una persona tan especial como tú.

Nunca olvides lo mucho que vales.

Te amo mucho, mi amor ❤️

Y recuerda...

Mi sueño solo estará completo
si en él estás tú.

`;



let i=0;



function escribir(){

    if(i < texto.length){

        document.getElementById("mensaje").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir,60);

    }

    else{

        const boton = document.getElementById("continuar");

        boton.style.display = "inline-block";

        boton.style.animation = "aparecerBoton 1.5s";

    }

}


setTimeout(escribir,2500);