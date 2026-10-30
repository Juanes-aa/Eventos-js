let formulario = document.getElementById("formTaller4");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", validarRegistro);
    
function validarRegistro() {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contrasena").value;
    let confirmarContraseña = document.getElementById("confirmaContrasena").value;

    if (nombre.trim() === "") {
        resultado.innerHTML = "Escribe tu nombre.";
        resultado.className = "error";
        return;
    }
    else if (isNaN(edad)) {
        resultado.innerText = "Escribe tu edad.";
        resultado.className = "error";
        return;
    } 
    else if (edad < 18 || edad > 100 ) {
        resultado.innerText = "La edad debe ser un número entero entre 18 y 100.";
        resultado.className = "error";
        return;
    } 
    else if (!correo.includes("@") || !correo.includes(".")) {
        resultado.innerText = "Escribe un correo válido.";
        resultado.className = "error";
        return;
    }
    else if (contraseña.trim() === "") {
        resultado.innerText = "Escribe una contraseña.";
        resultado.className = "error";
        return;
    }
    else if (confirmarContraseña.trim() === "") {
        resultado.innerText = "Confirma la contraseña.";
        resultado.className = "error";
        return;
    }
    else if (contraseña !== confirmarContraseña) {
        resultado.innerText = "Las contraseñas no coinciden.";
        resultado.className = "error";
        return;
    }
    else {
        resultado.innerText = `Registro exitoso. Bienvenido(a), ${nombre}`;
        resultado.className = "exito";
        return;
    }
};