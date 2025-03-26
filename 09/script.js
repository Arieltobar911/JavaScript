function Condition11() {
    let numero = parseInt(prompt("Ingresa un numero."));
    let results = numero % 2;

    if (results == 1){
        alert("El numero es IMPAR");
    } else {
        alert("El numero es PAR");
    }
}

function Condition12() {
    let peso = parseFloat(prompt("Ingresa tu peso."));
    let altura = parseFloat(prompt("Ingresa tu altura"));
    altura = altura / 100;
    let IMC =  peso / (altura * altura);

    if (IMC < 18.5) {
        alert("Peso bajo.");
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        alert("Peso normal");
    } else { (IMC >= 25.0) 
        alert("Sobrepeso");
    }
}

function Condition13() {
    let nota1 = parseFloat(prompt("Ingresa tu primera nota."));
    let nota2 = parseFloat(prompt("Ingresa tu segunda nota."));
    let nota3 = parseFloat(prompt("Ingresa tu tercera nota."));

    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio < 4.0) {
        alert("reprobado")
    } else {
        alert("aprobado")
    }
}