document.addEventListener("DOMContentLoaded", function () {
    const formularioIniciarSesion = document.querySelector(".form_iniciarsesion"),
    formularioRegistro = document.querySelector(".form_registro");

    formularioIniciarSesion.addEventListener("submit", function (event) {
        if (!validarInicioSesion()) {
            event.preventDefault(); // Evitar que se envíe el formulario si no es válido
        }
    });

    formularioRegistro.addEventListener("submit", function (event) {
        if (!validarRegistro()) {
            event.preventDefault(); // Evitar que se envíe el formulario si no es válido
        }
    });


    function validarInicioSesion() {
        const email = document.getElementById("emailForm").value,
            contraseña = document.getElementById("contraseña_ingreso").value;

        let esValido = true;

        if (email.trim() === "") {
            mostrarError("emailFormError", "Por favor, ingrese su dirección de correo electrónico.");
            esValido = false;
        } else if (!isValidEmail(email)) {
            mostrarError("emailFormError", "Por favor, ingrese una dirección de correo electrónico valida.");
            esValido = false;
        } else {
            ocultarError("emailFormError");
        }

        if (contraseña.trim() === "") {
            mostrarError("contraseñaFormError", "Por favor, ingrese su contraseña.");
            esValido = false;
        } else if (contraseña.trim().length < 15) {
            mostrarError("contraseñaFormError", "Por favor, ingrese una contraseña con al menos 15 caracteres.");
            esValido = false;
        } else {
            ocultarError("contraseñaFormError");
        }

        return esValido;
    }

    function validarRegistro() {
        const email = document.getElementById("emailForm").value,
            contraseñaRegistro = document.getElementById("contraseña_registro").value,
            contraseñaConfirmada = document.getElementById("contraseña_confirma").value;

        let esValido = true;

        if (email.trim() === "") {
            mostrarError("emailFormError", "Por favor, ingrese su dirección de correo electrónico.");
            esValido = false;
        } else if (!isValidEmail(email)) {
            mostrarError("emailFormError", "Por favor, ingrese una dirección de correo electrónico valida.");
            esValido = false;
        } else {
            ocultarError("emailFormError");
        }

        if (contraseñaRegistro.trim() === "") {
            mostrarError("contraseñaFormError", "Por favor, ingrese su contraseña.");
            esValido = false;
        } else if (contraseñaRegistro.trim().length < 15) {
            mostrarError("contraseñaFormError", "Por favor, ingrese una contraseña con al menos 15 caracteres.");
            esValido = false;
        } else {
            ocultarError("contraseñaFormError");
        }


        if (contraseñaConfirmada.trim() === "") {
            mostrarError("contraseñaFormError", "Por favor, confirme su contraseña.");
            esValido = false;
        } else if (contraseñaConfirmada !== contraseñaRegistro) {
            mostrarError("contraseñaFormError", "Las contraseñas no coinciden.");
            esValido = false;
        } else {
            ocultarError("contraseñaFormError");
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
});