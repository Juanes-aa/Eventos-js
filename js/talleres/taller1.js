let formulario = document.getElementById("formTaller1");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", taller1);

function taller1() {
    
    let numero = parseFloat(document.getElementById("numero").value);
    event.preventDefault();

    if (isNaN(numero)) {
        resultado.innerText= "Escriba un número";
        resultado.className = "error"
        return;
    }
    else if (numero % 1 !== 0) {
        resultado.innerText= "Escriba un número entero";
        resultado.className = "error";
        return;
    }
    else if (numero % 2 
        == 0) {
        resultado.innerText= "El número es par";
        resultado.className = "exito";
        return;
    }
    else {
        resultado.innerText= "El número es impar";
        resultado.className = "exito";
        return;
    };
};