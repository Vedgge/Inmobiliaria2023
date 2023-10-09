//INICIAR SESIÓN MODAL POPUP Y OVERLAY GRIS
const mostrarPopupLi = document.querySelector("#mostrar_popup_li"),
      popupLogin = document.querySelector(".login"),
      overlay = document.querySelector(".overlay"),
      mostrarPopupSu = document.querySelector("#mostrar_popup_sp"),
      popupSignup = document.querySelector(".signup");

mostrarPopupLi.addEventListener("click", function(){
  popupLogin.classList.add("active");
  overlay.classList.add("active");
});

mostrarPopupSu.addEventListener("click", function(){
  popupSignup.classList.add("active");
  overlay.classList.add("active");
});

document.querySelector(".login .cerrar_btn").addEventListener("click", function(){
  popupLogin.classList.add("closing");
  overlay.classList.add("closing");

  setTimeout(function() {
    popupLogin.classList.remove("active");
    overlay.classList.remove("active"); //Elimina la clase active
    popupLogin.classList.remove("closing");
    overlay.classList.remove("closing"); //Elimina la clase de cierre después de la animación
  }, 500); 
});

document.querySelector("#registrar").addEventListener("click", function(){
  popupLogin.classList.remove("active");
  popupSignup.classList.add("active");
});

document.querySelector("#iniciar_sesion").addEventListener("click", function(){
  popupLogin.classList.add("active");
  popupSignup.classList.remove("active");
});

document.querySelector(".signup .cerrar_btn").addEventListener("click", function(){
  popupSignup.classList.add("closing");
  overlay.classList.add("closing");
  setTimeout(function() {
    popupSignup.classList.remove("active");
    overlay.classList.remove("active"); //Elimina la clase active
    popupSignup.classList.remove("closing");
    overlay.classList.remove("closing"); //Elimina la clase de cierre después de la animación
  }, 500); 
});

//ANIMACIÓN HAMBURGUESA
let toggleBtn = document.querySelector('.toggle_button')
let barras = document.querySelectorAll('.bar')

function animHam(e) {
  barras.forEach(bar => bar.classList.toggle('x'))
}

toggleBtn.addEventListener('click', animHam)


//AGREGAR CLASE DE NAVBAR_LINK
const toggleButton = document.getElementsByClassName('toggle_button')[0]
const navbarLinks = document.getElementsByClassName('navbar_link')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

//TYPEWRITER ANIMATION
function sleep(ms){ //Funcion para esperar unos milisegundos
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const frases = ['hogar','departamento', 'local'];
const elementos = document.getElementById("escritura");

let waitTime = 100; //Tiempo para esperar entre letras

let curFrases = 0; //Index por la frase que queremos empezar, vamos a incrementarla con lógica

const loopEscritura = async () => { //Función async para llamar a la función waitTime
  while(true){ //loop para escribir las frases letra x letra
    let curLetra = frases[curFrases];
    for (let i = 0; i < curLetra.length; i++){
      elementos.innerText = curLetra.substring(0, i + 1);
      await sleep(waitTime);
    }

    await sleep(waitTime * 10); //Tiempo de espera entre escritura y eliminación

    for (let i = curLetra.length; i > 0; i--){ //Borrar letra x letra
      elementos.innerText = curLetra.substring(0, i - 1);
      await sleep(waitTime);
    }

    await sleep(waitTime * 5); //Tiempo de espera entre eliminación y escritura

    if (curFrases === frases.length - 1){ //Lógica para escribir la siguiente frase/palabra
      curFrases = 0;
    } else {
      curFrases++;
    }
  }
};

loopEscritura();