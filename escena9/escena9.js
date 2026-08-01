// ============================
// Estrellas
// ============================

const estrellas = document.getElementById("estrellas");

for(let i=0;i<180;i++){

    const estrella=document.createElement("div");

    estrella.classList.add("estrella");

    const tamaño=Math.random()*3;

    estrella.style.width=tamaño+"px";
    estrella.style.height=tamaño+"px";

    estrella.style.left=Math.random()*100+"%";
    estrella.style.top=Math.random()*100+"%";

    estrella.style.animationDelay=Math.random()*5+"s";

    estrellas.appendChild(estrella);

}

// ============================
// Carta
// ============================

const mensaje = `

Amor y sabe que perdóneme todo el mal que te hice los comentarios las acciones el desinterés todo.
perdóname nunca fue mi intención hacerla sentir mal o que esto se acabara.
se que no soy el mejor hombre del mundo y también se que tampoco soy el peor 
se que cometí errores que la cague, 

pero sabes algo bien que si siento en el fondo de mi corazon 
que realmente te quise con mi alma y te sigo queriendo 
y se que la regué y duele 

no vine a pedirte que  vuelvas porque eso se que no pasara solo vine a decir todo esto.

Y me voy sin rencor porque jamás voy a saber que paso por mi mente cuando decidí hacerte daño, Sabiendo que te morías de amor por mi.

TE EXTRAÑO MUCHO.

❤️

`;

let i = 0;

function escribir(){

    if(i < mensaje.length){

        document.getElementById("texto").innerHTML += mensaje.charAt(i);

        i++;

        setTimeout(escribir,45);

    }else{

        const boton = document.getElementById("continuar");

        boton.style.display="inline-block";

        boton.style.animation="aparecer 1.5s forwards";

    }

}

setTimeout(escribir,1500);