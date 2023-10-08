//INICIAR SESIÓN MODAL POPUP Y OVERLAY GRIS
const mostrarPopup = document.querySelector("#mostrar_popup");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

mostrarPopup.addEventListener("click", function(){
  popup.classList.add("active");
  overlay.classList.add("active");
});

document.querySelector(".popup .cerrar_btn").addEventListener("click", function(){
  popup.classList.add("closing");
  overlay.classList.add("closing");
  setTimeout(function() {
    popup.classList.remove("active");
    overlay.classList.remove("active");
    popup.classList.remove("closing");
    overlay.classList.remove("closing"); //Elimina la clase de cierre después de la animación
  }, 500); 
});

//SCRIPT PARA AGREGAR CLASE DE NAVBAR_LINK
const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByClassName('navbar_link')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

//SCRIPT PARA TYPEWRITER ANIMATION
function sleep(ms){ //Funcion para esperar unos milisegundos
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const frases = ['hogar','departamento', 'local'];
const elementos = document.getElementById("escritura");

let sleepTime = 100; //Tiempo para esperar entre letras

let curFrases = 0; //index por la frase que queremos empezar, vamos a incrementarla con lógica

const loopEscritura = async () => { //función async para llamar a la función sleepTime
  while(true){ //loop para escribir las frases letra x letra
    let curLetra = frases[curFrases];
    for (let i = 0; i < curLetra.length; i++){
      elementos.innerText = curLetra.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10); //tiempo de espera entre escritura y eliminación

    for (let i = curLetra.length; i > 0; i--){ //borrar letra x letra
      elementos.innerText = curLetra.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5); //tiempo de espera entre eliminación y escritura

    if (curFrases === frases.length - 1){ //lógica para escribir la siguiente frase/palabra
      curFrases = 0;
    } else {
      curFrases++;
    }
  }
};

loopEscritura();