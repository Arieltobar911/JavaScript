function ejercicio1() {
    let numero = parseInt(prompt("Ingresa un numero."));
    let havik = numero + 7;
    let array = [];
    for(let mode = 1; mode <= havik; mode++){
        array.push(`3 x ${mode}`);
    }
    alert(`multiplos: ${array.join(" - ")}`);
}

function ejercicio2() {
    let n = parseInt(prompt("¿Cuantos numeros deseas sumar?"));
    let array = [];
    let suma = 0;
}