document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".contact_form"),
    contactoPropiedad = document.querySelector(".contacto_propiedad");   

    formulario.addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Evitar que se envíe el formulario si no es válido
        }

        contactoPropiedad.style.height = "610px";
    });    

    function validarFormulario() {
        const nombre = document.getElementById("nombre").value,
            email = document.getElementById("emailForm").value,
            telefono = document.getElementById("telefono").value,
            mensaje = document.getElementById("mensaje").value;

        let esValido = true;

        if (nombre.trim() === "") {
            mostrarError("nombreError", "Por favor, ingrese su nombre.");
            esValido = false;
        } else {
            ocultarError("nombreError");
        }

        if (email.trim() === "") {
            mostrarError("emailFormError", "Por favor, ingrese su dirección de correo electrónico.");
            esValido = false;
        } else if (!isValidEmail(email)) {
            mostrarError("emailFormError", "Por favor, ingrese una dirección de correo electrónico valida.");
            esValido = false;
        } else {
            ocultarError("emailFormError");
        }

        if (telefono.trim() === "") {
            mostrarError("telefonoError", "Por favor, ingrese su número de teléfono.");
            esValido = false;
        } else if (!/^\+?\d{6,}$/.test(telefono)) {
            mostrarError("telefonoError", "Por favor, ingrese un número de teléfono válido.");
            esValido = false;
        } else {
            ocultarError("telefonoError");
        }

        if (mensaje.trim() === "") {
            mostrarError("mensajeError", "Por favor, ingrese su mensaje.");
            esValido = false;
        } else if (mensaje.trim().length < 10) {
            mostrarError("mensajeError", "Por favor, ingrese al menos 10 caracteres.");
            esValido = false;
        } else {
            ocultarError("mensajeError");
        }

        return esValido;
    }

    function mostrarError(elementId, mensaje) {
        const elementoError = document.getElementById(elementId);
        elementoError.textContent = mensaje;
    }

    function ocultarError(elementId) {
        const elementoError = document.getElementById(elementId);
        elementoError.textContent = "";
    }

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }

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


    //CARRUSEL
    const tarjetas = document.querySelectorAll('.tarjeta_prop'),
        tarjetaPrimera = document.querySelector('.tarjeta_primera'),
        tarjetaFinal = document.querySelector('.tarjeta_final'),
        botonAnterior = document.getElementById('anterior'),
        botonSiguiente = document.getElementById('siguiente'),
        botonStopIzq = document.getElementById('boton_stop_izq'),
        botonStopDer = document.getElementById('boton_stop_der');
    //Máximo n° de tarjetas a mostrar
    let numTarjetasPorVista = 3;
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
        } else {
            numTarjetasPorVista = 3;
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