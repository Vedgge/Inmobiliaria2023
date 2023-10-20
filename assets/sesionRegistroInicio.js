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
        const email = document.getElementById("emailFormInicioSesion").value,
            contraseña = document.getElementById("contraseña_ingreso").value;
            
        let esValido = true;

        if (email.trim() === "") {
            mostrarError("emailFormErrorInicioSesion", "Por favor, ingrese su dirección de correo electrónico.");
            esValido = false;
        } else if (!isValidEmail(email)) {
            mostrarError("emailFormErrorInicioSesion", "Por favor, ingrese una dirección de correo electrónico valida.");
            esValido = false;
        } else {
            ocultarError("emailFormErrorInicioSesion");
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
        const email = document.getElementById("emailFormRegistro").value,
            contraseñaRegistro = document.getElementById("contraseña_registro").value,
            contraseñaConfirmada = document.getElementById("contraseña_confirma").value,
            terminosCondicionesCheckbox = document.querySelector("#terminos_condiciones");

        let esValido = true;

        if (email.trim() === "") {
            mostrarError("emailFormErrorRegistro", "Por favor, ingrese su dirección de correo electrónico.");
            esValido = false;
        } else if (!isValidEmail(email)) {
            mostrarError("emailFormErrorRegistro", "Por favor, ingrese una dirección de correo electrónico valida.");
            esValido = false;
        } else {
            ocultarError("emailFormErrorRegistro");
        }

        if (contraseñaRegistro.trim() === "") {
            mostrarError("contraseñaFormErrorRegistro", "Por favor, ingrese su contraseña.");
            esValido = false;
        } else if (contraseñaRegistro.trim().length < 15) {
            mostrarError("contraseñaFormErrorRegistro", "Por favor, ingrese una contraseña con al menos 15 caracteres.");
            esValido = false;
        } else {
            ocultarError("contraseñaFormErrorRegistro");
        }


        if (contraseñaConfirmada.trim() === "") {
            mostrarError("contraseñaFormErrorConfirma", "Por favor, confirme su contraseña.");
            esValido = false;
        } else if (contraseñaConfirmada.value !== contraseñaRegistro.value) {
            mostrarError("contraseñaFormErrorConfirma", "Las contraseñas no coinciden.");
            esValido = false;
        } else {
            ocultarError("contraseñaFormErrorConfirma");
        }

        if (!terminosCondicionesCheckbox.checked) {
            mostrarError("terminosCondicionesError", "Debes estar de acuerdo con los terminos y condiciones.");
            esValido = false;
        } else {
            ocultarError("terminosCondicionesError");
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