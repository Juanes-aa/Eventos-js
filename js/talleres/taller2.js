let formulario = document.getElementById("formTaller2");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", clasificarNota);

function clasificarNota() {
    
    let nota = parseFloat(document.getElementById("nota").value);
    event.preventDefault();

    if (isNaN(nota)) {
        resultado.innerText= "Escriba la nota.";
        resultado.className = "error"
        return;
    }
    else if (nota < 0 || nota > 5) {
        resultado.innerText= "Escriba una nota válida (0 - 5).";
        resultado.className = "error"
        return;
    }
    else if (nota >=4.5 && nota <= 5){
        resultado.innerText= `Nota ${nota}: Exelente. Aprobado.`;
        resultado.className = "exito";
        return;
    }
    else if (nota >= 4 && nota < 4.5){
        resultado.innerText= `Nota ${nota}: Bueno. Aprobado.`;
        resultado.className = "exito";
        return;
    }
    else if (nota >= 3 && nota < 4){
        resultado.innerText= `Nota ${nota}: Aceptable. Aprobado.`;
        resultado.className = "exito";
        return;
    }
    else {
        resultado.innerText= `Nota ${nota}: Insuficiente. No aprobado.`;
        resultado.className = "exito";
        return;
    };
};