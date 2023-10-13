document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("viviendaForm");

    formulario.addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Evitar que se envíe el formulario si no es válido
        }
    });

    function validarFormulario() {
        const ciudad = document.getElementById("ciudad").value;
        const barrio = document.getElementById("barrio").value;
        const calle = document.getElementById("calle").value;
        const numero = document.getElementById("numero").value;
        const habitaciones = document.getElementById("habitaciones").value;
        const banos = document.getElementById("banos").value;
        const area = document.getElementById("area").value;
        const correo = document.getElementById("correo").value;

        let esValido = true;

        if (ciudad.trim() === "") {
            alert("Por favor, ingrese la ciudad.")
            esValido = false;
        } 

        if (barrio.trim() === "") {
            alert("Por favor, ingrese el barrio.");
            esValido = false;
        }

        if (calle.trim() === "") {
            alert("Por favor, ingrese la calle.");
            esValido = false;
        }

        if (numero.trim() === "") {
            alert("Por favor, ingrese el número.");
            esValido = false;
        }

        if (habitaciones.trim() === "") {
            alert("Por favor, ingrese la cantidad de habitaciones.");
            esValido = false;
        }

        if (banos.trim() === "") {
            alert("Por favor, ingrese la cantidad de baños.");
            esValido = false;
        }

        if (area.trim() === "") {
            alert("Por favor, ingrese el área (m2).");
            esValido = false;
        }

        if (correo.trim() === "" || !isValidEmail(correo)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
            esValido = false;
        }

        return esValido;
    }

    function isValidEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
      }
});