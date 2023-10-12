document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".contact_form");

    formulario.addEventListener("submit", function (event) {
      if (!validarFormulario()) {
        event.preventDefault(); // Evitar que se envíe el formulario si no es válido
      }
    });

    function validarFormulario() {
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("emailForm").value;
      const telefono = document.getElementById("telefono").value;
      const mensaje = document.getElementById("mensaje").value;
      const preferencia = document.querySelector('input[name="preferencia"]:checked');

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

      if (!preferencia) {
        mostrarError("preferenciaError", "Por favor, seleccione su preferencia de contacto.");
        esValido = false;
      } else {
        ocultarError("preferenciaError");
      }

      if (mensaje.trim() === "") {
        mostrarError("mensajeError", "Por favor, ingrese su mensaje.");
        esValido = false;
      } else if (mensaje.trim().length < 15) {
        mostrarError("mensajeError", "Por favor, ingrese al menos 15 caracteres.");
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
  });