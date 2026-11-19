
document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("btnInformacion");
    const mensaje = document.getElementById("mensaje");

    if (boton && mensaje) {

        boton.addEventListener("click", function () {

            mensaje.textContent = "Mi formación en Ingeniería de Software y mi experiencia en el área comercial me motivan a seguir aprendiendo y desarrollando nuevas habilidades profesionales.";

        });

    }

});


