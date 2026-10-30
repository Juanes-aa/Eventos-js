let formulario = document.getElementById("formTaller5");
let resultado = document.getElementById("resultado");

formulario.addEventListener("submit", calcular);
    
function calcular() {
    event.preventDefault();

    let primero = parseInt(document.getElementById("primero").value);
    let segundo = parseInt(document.getElementById("segundo").value);
    let opcion = document.getElementById("operacion").value;

    switch(true) {
        case opcion === "suma":
            suma = primero + segundo;
            resultado.innerHTML = `${primero} + ${segundo} = ${suma}`;
            resultado.className = "exito";
            break;
        
        case opcion === "resta":
            resta = primero - segundo;
            resultado.innerHTML = `${primero} - ${segundo} = ${resta}`;
            resultado.className = "exito";
            break;
        case opcion === "multiplicacion":
            multiplicacion = primero * segundo;
            resultado.innerHTML = `${primero} * ${segundo} = ${multiplicacion}`;
            resultado.className = "exito";
            break;
        case opcion === "division":
            division = primero / segundo;
            resultado.innerHTML = `${primero} / ${segundo} = ${division.toFixed(2)}`;
            resultado.className = "exito";
            break;
    }
};