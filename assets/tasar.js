
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("viviendaForm");

    formulario.addEventListener("submit", function (event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Evitar que se envíe el formulario si no es válido
        }
    });

    function validarFormulario() {
        const direccion = document.getElementById("direccion").value,
            ambientes = document.getElementById("habitaciones").value,
            banos = document.getElementById("banos").value,
            area = document.getElementById("area").value,
            correo = document.getElementById("correo").value;

        let esValido = true;

        if (direccion.trim() === "") {
            alert("Por favor, ingrese la dirección.")
            esValido = false;
        }

        if (ambientes.trim() === "") {
            alert("Por favor, ingrese la cantidad de ambientes.");
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