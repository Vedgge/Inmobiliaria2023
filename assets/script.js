//INICIAR SESIÓN MODAL POPUP Y OVERLAY GRIS
const mostrarPopupLi = document.querySelector("#mostrar_popup_li"),
      popupLogin = document.querySelector(".login"),
      overlay = document.querySelector(".overlay"),
      mostrarPopupSu = document.querySelector("#mostrar_popup_sp"),
      popupSignup = document.querySelector(".signup");

function abrirPopupRegistro(){
  popupSignup.classList.add("active");
  overlay.classList.add("active");
}

function abrirPopupInicioSesion(){
  popupLogin.classList.add("active");
  overlay.classList.add("active");
}

mostrarPopupLi.addEventListener("click", abrirPopupInicioSesion);

mostrarPopupSu.addEventListener("click", abrirPopupRegistro);

function popupInicioSesionAPopupRegistro(){
  popupLogin.classList.remove("active");
  popupSignup.classList.add("active");
}
function popupRegistroAPopupInicioSesion(){
  popupLogin.classList.add("active");
  popupSignup.classList.remove("active");
}

function cerrarPopupRegistro(){
  popupSignup.classList.add("closing");
  overlay.classList.add("closing");
  setTimeout(function() {
    popupSignup.classList.remove("active");
    overlay.classList.remove("active"); //Elimina la clase active
    popupSignup.classList.remove("closing");
    overlay.classList.remove("closing"); //Elimina la clase de cierre después de la animación
  }, 500); 
}

function cerrarPopupInicioSesion(){
  popupLogin.classList.add("closing");
  overlay.classList.add("closing");

  setTimeout(function() {
    popupLogin.classList.remove("active");
    overlay.classList.remove("active"); //Elimina la clase active
    popupLogin.classList.remove("closing");
    overlay.classList.remove("closing"); //Elimina la clase de cierre después de la animación
  }, 500); 
}

document.querySelector(".login .cerrar_btn").addEventListener("click", cerrarPopupInicioSesion);

document.querySelector("#registrar").addEventListener("click", popupInicioSesionAPopupRegistro);

document.querySelector("#iniciar_sesion").addEventListener("click", popupRegistroAPopupInicioSesion);

document.querySelector(".signup .cerrar_btn").addEventListener("click", cerrarPopupRegistro);

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

toggleButton.addEventListener('click', function(){
  navbarLinks.classList.toggle('active');
});

//TYPEWRITER ANIMATION
function sleep(ms){ //Funcion promesa para esperar unos milisegundos
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

//ANIMACIÓN SCROLL
const observador = new IntersectionObserver((entries) => { //Creo una clase llamada IntersectionObserver que toma una función callback en su constructor, observa varias entrys
  entries.forEach((entry) => { //Loop sobre los multiples entrys (elementos escondidos)
    if (entry.isIntersecting) { //Condicional para saber si esta intersectando el viewport, si es así le agregamos la clase mostrar
      entry.target.classList.add('mostrar');
    }
  });
});

const hiddenElements = document.querySelectorAll('.escondido'); //Selecciono todos los elemtnos que tengan la clase escondido
hiddenElements.forEach((el) => observador.observe(el)); //Acá le decimos que observar al observador, loopea sobre todos los elementos escondidos

//CARRUSEL
const tarjetas = document.querySelectorAll('.carta_prop'),
      numTarjetasPorVista = 4; //Máximo n° de tarjetas a mostrar
let currentIndex = 0; //Inicializo la variable currentIndex dentro de Let porque va a ser mutable, es como un contador o seguimiento

function mostrarTarjetas(index) { //Toma parametro index que especifica el indice de la tarjeta a mostrar
  tarjetas.forEach((tarjeta, i) => { //Recorre todas las tarjetas del carrusel, "tarjeta" representa cada carta individual e "i" el indice de la tarjeta en el array
    tarjeta.style.display = i >= index && i < index + numTarjetasPorVista ? 'block' : 'none'; //Se usa para configurar la propiedad display del style de la tarjeta
  });
}

function avanzarTarjetas() {
  currentIndex = (currentIndex + 1) % tarjetas.length; //Aumenta currentIndex en +1 para avanzar al siguiente, cuando currentIndex + 1 = 4, el módulo con tarjetas.length me da 0, volviendo al primer bucle
  mostrarTarjetas(currentIndex);
}

function retrocederTarjetas() {
  currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length; //Lo mismo que avanzar, pero contrario
  mostrarTarjetas(currentIndex);
}

const botonAnterior = document.getElementById('anterior'),
      botonSiguiente = document.getElementById('siguiente');

botonAnterior.addEventListener('click', retrocederTarjetas);
botonSiguiente.addEventListener('click', avanzarTarjetas);

mostrarTarjetas(currentIndex); //Mostrar las primeras tarjetas al cargar la página

//TESTIMONIOS

// const testimonios = document.querySelectorAll(".testimonios"),
//       testimonioPorVista = 4;
// let currentIndexTesti = 0;

// function mostrarTestimonio(index) {
//   testimonios.forEach((testimonio, i) => {
//     testimonio.style.display = i >= index && i < index + testimonioPorVista ? 'block' : 'none';
//   });
// }

// function avanzarTestimonio() {
//   currentIndexTesti = (currentIndexTesti + 1) % testimonios.length;
//   mostrarTestimonio(currentIndexTesti);
// }

// function retrocederTestimonio() {
//   currentIndexTesti = (currentIndexTesti - 1 + testimonios.length) % testimonios.length;
//   mostrarTestimonio(currentIndexTesti);
// }

// mostrarTestimonio(currentIndexTesti);
// setInterval(avanzarTestimonio, 1000);

// const testimonials = document.querySelectorAll('.testimonial');
// let currentIndex_test = 0;

// function showTestimonial(index) {
//     testimonials[currentIndex_test].classList.remove('show');
//     currentIndex_test = index;
//     if (currentIndex_test < 0) {
//       currentIndex_test = testimonials.length - 1;
//     } else if (currentIndex_test >= testimonials.length) {
//       currentIndex_test = 0;
//     }
//     testimonials[currentIndex_test].classList.add('show');
// }

// showTestimonial(currentIndex_test);

// setInterval(() => {
//     showTestimonial(currentIndex_test + 1);
// }, 2000); // Cambia el testimonio cada 5 segundos
