//INICIAR SESIÓN MODAL POPUP Y OVERLAY GRIS
const mostrarPopupLi = document.querySelector("#mostrar_popup_li"),
  popupLogin = document.querySelector(".login"),
  overlay = document.querySelector(".overlay"),
  mostrarPopupSu = document.querySelector("#mostrar_popup_sp"),
  popupSignup = document.querySelector(".signup");

mostrarPopupLi.addEventListener("click", abrirPopupInicioSesion);

mostrarPopupSu.addEventListener("click", abrirPopupRegistro);

document.querySelector(".login .cerrar_btn").addEventListener("click", cerrarPopupInicioSesion);

document.querySelector("#registrar").addEventListener("click", popupInicioSesionAPopupRegistro);

document.querySelector("#iniciar_sesion").addEventListener("click", popupRegistroAPopupInicioSesion);

document.querySelector(".signup .cerrar_btn").addEventListener("click", cerrarPopupRegistro);

function abrirPopupRegistro() {
  popupSignup.classList.add("active");
  overlay.classList.add("active");
}

function abrirPopupInicioSesion() {
  popupLogin.classList.add("active");
  overlay.classList.add("active");
}

function popupInicioSesionAPopupRegistro() {
  popupLogin.classList.remove("active");
  popupSignup.classList.add("active");
}

function popupRegistroAPopupInicioSesion() {
  popupLogin.classList.add("active");
  popupSignup.classList.remove("active");
}

function cerrarPopupRegistro() {
  popupSignup.classList.add("closing");
  overlay.classList.add("closing");
  setTimeout(function () {
    popupSignup.classList.remove("active");
    overlay.classList.remove("active"); //Elimina la clase active
    popupSignup.classList.remove("closing");
    overlay.classList.remove("closing"); //Elimina la clase de cierre después de la animación
  }, 500);
}

function cerrarPopupInicioSesion() {
  popupLogin.classList.add("closing");
  overlay.classList.add("closing");

  setTimeout(function () {
    popupLogin.classList.remove("active");
    overlay.classList.remove("active"); //Elimina la clase active
    popupLogin.classList.remove("closing");
    overlay.classList.remove("closing"); //Elimina la clase de cierre después de la animación
  }, 500);
}

//ANIMACIÓN HAMBURGUESA
let toggleBtn = document.querySelector('.toggle_button')
let barras = document.querySelectorAll('.bar')

function animHam(e) {
  barras.forEach(bar => bar.classList.toggle('x'))
}

toggleBtn.addEventListener('click', animHam)


//AGREGAR CLASE DE NAVBAR_LINK
const toggleButton = document.querySelector(".toggle_button"),
  navbarLinks = document.querySelector(".navbar_link");

toggleButton.addEventListener('click', function () {
  navbarLinks.classList.toggle('active');
});

//ANIMACION ESCRITURA
const frases = ['hogar', 'departamento', 'local'],
    elementos = document.getElementById("escritura");

let waitTime = 100; //Tiempo para esperar entre letras
let curFrases = 0; //Index por la frase que queremos empezar, vamos a incrementarla con lógica

function sleep(ms) { //Funcion promesa para esperar unos milisegundos
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const loopEscritura = async () => { //Función async para llamar a la función waitTime
  while (true) { //loop para escribir las frases letra x letra
    let curLetra = frases[curFrases];
 
    for (let i = 0; i < curLetra.length; i++) {
      elementos.innerText = curLetra.substring(0, i + 1);
      await sleep(waitTime);
    }

    await sleep(waitTime * 10); //Tiempo de espera entre escritura y eliminación

    for (let i = curLetra.length; i > 0; i--) { //Borrar letra x letra
      elementos.innerText = curLetra.substring(0, i - 1);
      await sleep(waitTime);
    }

    await sleep(waitTime * 5); //Tiempo de espera entre eliminación y escritura

    if (curFrases === frases.length - 1) { //Lógica para borrar palabra actual y escribir la siguiente frase/palabra
      curFrases = 0;
    } else {
      curFrases++;
    }
  }
};

loopEscritura();

//ANIMACIÓN SCROLL SLIDE DERECHA -> CENTRO
const observador = new IntersectionObserver((entries) => { //Creo una clase llamada IntersectionObserver que toma una función callback en su constructor, observa varias entrys
  entries.forEach((entry) => { //Loop sobre los multiples entrys (elementos escondidos)
    if (entry.isIntersecting) { //Condicional para saber si esta intersectando el viewport, si es así le agregamos la clase mostrar
      entry.target.classList.add('mostrar');
    }
  });
});

const elEscondidos = document.querySelectorAll('.escondido'); //Selecciono todos los elemtnos que tengan la clase escondido
elEscondidos.forEach((el) => observador.observe(el)); //Acá le decimos que observar al observador, loopea sobre todos los elementos escondidos

//ANIMACIÓN SCROLL SLIDE ABAJO -> CENTRO
const observador2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('mostrar-1');
    }
  });
});

const elEscondidos2 = document.querySelectorAll('.escondido-1');
elEscondidos2.forEach((el) => observador2.observe(el));


//CARRUSEL
document.addEventListener('DOMContentLoaded', function() {
const tarjetas = document.querySelectorAll('.tarjeta_prop'),
    tarjetaPrimera = document.querySelector('.tarjeta_primera'),
    tarjetaFinal = document.querySelector('.tarjeta_final'),
    botonAnterior = document.getElementById('anterior'),
    botonSiguiente = document.getElementById('siguiente'),
    botonStopIzq = document.getElementById('boton_stop_izq'),
    botonStopDer = document.getElementById('boton_stop_der');
 //Máximo n° de tarjetas a mostrar
let numTarjetasPorVista = 4;
let tarjetasIndex = 0; //Inicializo la variable tarjetasIndex dentro de Let porque va a ser mutable, es como un contador o seguimiento

function mostrarTarjetas(index) { //Toma parametro index que especifica el indice de la tarjeta a mostrar
  tarjetas.forEach((tarjeta, i) => { //Recorre todas las tarjetas del carrusel, "tarjeta" representa cada carta individual e "i" el indice de la tarjeta en el array
    tarjeta.style.display = i >= index && i < index + numTarjetasPorVista ? 'block' : 'none';
    //Se usa para configurar la propiedad display del style de la tarjeta
  });
}

function ajustarNumeroDeTarjetasPorVista() {
  if (window.innerWidth < 800) {
    numTarjetasPorVista = 1;
  } else if (window.innerWidth < 1130) {
    numTarjetasPorVista = 2;
  } else if (window.innerWidth < 1450) {
    numTarjetasPorVista = 3;
  } else {
    numTarjetasPorVista = 4;
  }
  mostrarTarjetas(tarjetasIndex);
}

window.addEventListener('resize', ajustarNumeroDeTarjetasPorVista);

function avanzarTarjetas() {
  tarjetasIndex = (tarjetasIndex + 1) % tarjetas.length; //Aumenta tarjetasIndex en +1 para avanzar al siguiente, cuando currentIndex + 1 = 4, el módulo con tarjetas.length me da 0, volviendo al primer bucle
  mostrarTarjetas(tarjetasIndex);
  actualizarVisibilidadBotones();
}

function retrocederTarjetas() {
  tarjetasIndex = (tarjetasIndex - 1 + tarjetas.length) % tarjetas.length; //Lo mismo que avanzar, pero contrario
  mostrarTarjetas(tarjetasIndex);
  actualizarVisibilidadBotones();
}

function actualizarVisibilidadBotones() {
  if (tarjetaPrimera.style.display === 'block') {
    botonAnterior.style.display = 'none';
    botonStopIzq.style.display = 'block';
  } else {
    botonStopIzq.style.display = 'none';
    botonAnterior.style.display = 'block';
  }

  if (tarjetaFinal.style.display === 'block') {
    botonSiguiente.style.display = 'none';
    botonStopDer.style.display = 'block';
  } else {
    botonStopDer.style.display = 'none';
    botonSiguiente.style.display = 'block';
  }
}

botonAnterior.addEventListener('click', retrocederTarjetas);
botonSiguiente.addEventListener('click', avanzarTarjetas);


// Mostrar las primeras tarjetas al cargar la página y ajustar el número de tarjetas por vista
mostrarTarjetas(tarjetasIndex);
ajustarNumeroDeTarjetasPorVista();
actualizarVisibilidadBotones();
});
