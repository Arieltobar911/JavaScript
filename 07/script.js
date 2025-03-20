console.log("system is working...")

function Condition01(){
    let edad = parseInt(prompt("Introduce tu edad"));
    if (edad >= 18) {
        alert("Eres mayor de edad.");
    } else {
        alert("Eres menor de edad.");
    }
}

function Condition02(){
    let temperatura = parseInt(prompt("cual es la temperatura? (en grados por favor)."));
    if (temperatura < 0) {
        alert("hace frio.");
    } else if (temperatura >= 0 && temperatura <= 25) { //aplica una variadad entre 0 - 25
        alert("La temperatura es agradable.");
    } else if (temperatura >= 25) {
        alert("hace calor.");
    } else {
        alert("respuesta invalida.");
    }
}

function Condition03() {
    let nombreUsuario = prompt("ingrese su usuario.")
    let contraseña = prompt("ingrese su contraseña.")
    if (nombreUsuario == "usuario123" && contraseña == "secreto") {
        alert("acceso concedido.");
    } else {
        alert("acceso denegado.");
    }
}

function Condition04() {
    let numero = parseInt(prompt("ingresa un numero."))
    if (numero === 0){
        alert("el numero es un cero.");
    } else if (numero < 0) {
        alert("el numero es un negativo.");
    } else if (numero > 0) {
        alert("el numero es un positivo.");
    } else {
        alert("numero invalido.");
    }
}

function Condition05() {
    let puntuacion = parseInt(prompt("jugador, ingresa tu puntuacion."))
    if (puntuacion >= 90) {
        alert("Excelente");
    } else if (puntuacion >= 79 && puntuacion <= 89) {
        alert("Buen trabajo");
    } else if (puntuacion < 70) {
        alert("necesitas mejorar");
    } else {
        alert("puntuacion invalida.");
    }
}
