<<<<<<< HEAD
console.log("system is working...")

function Condition06() {
    let edad = parseInt(prompt("Ingresa tu edad."))
    let aceptaTerminos = prompt("Estas de acuerdo con nuestros terminos?")

    if (edad >= 18 && aceptaTerminos === "si") {
        alert("acceso concedido.");
    } else if (edad < 18 && aceptaTerminos === "si") {
        alert("acceso denegado.");
    } else if (edad >= 18 && aceptaTerminos === "no") {
        alert("acceso denegado.");
    } else if (edad < 18 && aceptaTerminos === "no") {
        alert("acceso denegado.");
    } else {
        alert("respuestas invalidas.");
    }
};

function Condition07() {
    let edades = parseInt(prompt("Ingresa tu edad.")) // utilizar ===
    let esEstudiante = prompt("Eres un estudiante?")

    if (edades >= 60 || esEstudiante === "si") {
        alert("Descuento aplicado.");
    } else if (edades < 60 || esEstudiante === "no") {
        alert("No puedes usar este descuento.");
    } else {
        alert("respuestas invalidas.");
    }
}

function Condition08() {
    let usuario = prompt("Ingresa tu usuario.")
    let contraseña = prompt("Ingresa tu contraseña.")

    if (!usuario) {
        alert("Error: Debes ingresar usuario y contraseña")
    } else if(!contraseña) {
        alert("Error: Debes ingresar usuario y contraseña")
    } else {
        alert("Inicio de sesión exitoso")
    }
}

function Condition09() {
    let energiaSuficiente = prompt("Hay suficiente Energia? (si/no)")
    let interruptorEncendido = prompt("El interruptor esta Encendido? (si/no)")

    if (energiaSuficiente === "si" && interruptorEncendido === "si") {
        alert("Máquina encendida")
    } else if (energiaSuficiente === "no" && interruptorEncendido === "no") {
        alert("No se puede encender la máquina")
    } else {
        alert("Unexpected Fatal Error (UFE).")
    } //ya es verdadero o falso de por si 
}

function Condition10() {
    let bloqueado = prompt("Has sido bloqueado?")
    let tieneCredenciales = prompt("Tienes credenciales Validas?")

    if (bloqueado === "si" || tieneCredenciales === "no") {
        alert("Acceso denegado")
    } else if (!bloqueado || !tieneCredenciales) {
        alert("Acceso denegado")
    } else if (bloqueado === "no" || tieneCredenciales === "si") {
        alert("Acceso permitido")
    } else {
        alert("Unexpected Fatal Error (UFE).")
    }
=======
>>>>>>> 149bdd3a7f14965f2637ce48f04f997a2191f024
}