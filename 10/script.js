function BucleWhile() {
    let Contador = 10;
    let Lista = [];
    while(Contador >= 1) {
        Lista.push(Contador);
        Contador--;
    }
    alert(`los numeros en array son: ${Lista.join(" - ")}`) 
}

function BucleFor() {
    let array = [];
    for (let i = 10; i >= 1; i-- ) {
        array.push(i);
    }
    alert(`Los numeros son: ${array.join(" - ")}`)
}

function ejercicio01 () {
    let n = parseInt(prompt("Ingrese un numero entero."));
    let count = 1;
    let array = [];
    while(count <= n){
        array.push(count);
        count++
    }
    alert(`Contando: ${array.join(" - ")}`);
}

function ejercicio02 () {
    let n = parseInt(prompt("Ingrese un numero entero."));
    let array = [];
    let poland = 1; //poland es contador
    while(n >= poland) { // si tu numero es mayor o igual a poland(1)
        array.push(n);
        n--;
    }
    alert(`Contando: ${array.join(" - ")}`);
}

function ejercicio03() {
    let n = parseInt(prompt("Ingresa un numero entero."));
    let oracle = 0;
    let array = [];
    for(let lysandro = 1; lysandro <= n; lysandro++) {
        oracle += lysandro;
        array.push(lysandro);
    }
    alert(`numeros: ${array.join(" - ")}\nresultado: ${oracle}`);
}


function ejercicio04() {
    let n = parseInt(prompt("Ingresa un numero entero."));
    let array = [];
    for(let sars = 1; sars <= n; sars++) {  //ciclo for: crea al contador sars, si sars es inferior a tu numero, se añade uno predeterminadamente
        if (sars % 2 == 0){ //si los numeros que llega a tener el contador sars son divisibles por 2 
            array.push(sars) //se agregan en la lista
        }// pero descarta los impares si le llegan a sobrar 1
    }
    alert(`multiplos: ${array.join(" - ")}`); //imprema la lista con los numero divisibles con 2
}













