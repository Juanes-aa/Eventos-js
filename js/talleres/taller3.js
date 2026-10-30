let formulario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let numeroA = parseFloat(document.getElementById("numeroA").value);
    let numeroB = parseFloat(document.getElementById("numeroB").value);
    let numeroC = parseFloat(document.getElementById("numeroC").value);

    if (isNaN(numeroA) || isNaN(numeroB) || isNaN(numeroC)) {
        resultado.innerText = "Completa los tres números.";
        resultado.className = "error";
    } else if (numeroA === numeroB && numeroB === numeroC) {
        resultado.innerText = "Los tres números son iguales.";
        resultado.className = "exito";
    } else {
        let mayor = numeroA;

        if (numeroB > mayor) {
            mayor = numeroB;
        }
        if (numeroC > mayor) {
            mayor = numeroC;
        }

        resultado.innerText = `El número mayor es ${mayor}.`;
        resultado.className = "exito";
    }
});