function ejercicio1(){
    let n = parseInt(prompt("Ingresa un numero."));
    let array = [];

    for(let cont = 1; n >= cont; cont++){
        array.push(`${n} + ${cont}`)
    }
    alert(`Tu suma: ${array.join(" || ")}`);
}

function ejercicio2(){
    let helos = 100;
    let array = [];

    for(let sars = 1; sars <= helos; sars++) {  
        if (sars % 2 == 0){ 
            array.push(sars) 
        }
    }
    alert(`numeros pares: ${array.join(" - ")}`);
}

function ejercicio3(){
    let helos = 100;
    let array = [];

    for(let sars = 1; sars <= helos; sars++) {  
        if (sars % 2 == 1){ 
            array.push(sars) 
        }
    }
    alert(`numeros pares: ${array.join(" - ")}`);
}

function ejercicio4(){
    let pomps = 5;
    let resultado = 0;
    let array = [];

    for(let count = 1; count <= pomps; count++){
        let sam = parseInt(prompt(`Ingresa tu ${count} calculo:`));

        resultado += sam; 
        array.push(sam);
    }
    alert(`La suma total de los siguientes 5 números:\n(${array.join(" - ")})\nEs: ${resultado}`);
}

function ejercicio5(){
    let pomps = parseInt(prompt("Cantos numeros deseas sumar?"));
    let resultado = 0;
    let array = [];

    for(let count = 1; count <= pomps; count++){
        let sam = parseInt(prompt(`Ingresa tu ${count} calculo:`));

        resultado += sam; 
        array.push(sam);
    }
    alert(`La suma total de los siguientes 5 números:\n(${array.join(" - ")})\nEs: ${resultado}`);
}

function ejercicio6(){
    let num1 = parseInt(prompt("Ingresa tu primer numero."))  
    let num2 = parseInt(prompt("Ingresa tu segundo numero."))
    let operador = prompt("Selecciona tu operador\n+ = Ruma\n- = Resta\n* = Multiplicacion\n/ = Division")

    if(operador === "+"){
        let halo = num1 + num2
        alert(`Tu resultado es: ${halo}`)
    } else if(operador === "-"){
        let halo = num1 - num2
        alert(`Tu resultado es: ${halo}`)
    } else if(operador === "*"){
        let halo = num1 * num2
        alert(`Tu resultado es: ${halo}`)
    } else if(operador === "/"){
        let halo = num1 / num2
        alert(`Tu resultado es: ${halo}`)
    } else{
        alert("Unexpected Fatal Error (UFE)")
    }
}




































































