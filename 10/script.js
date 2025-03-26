function BucleWhile() {
    let Contador = 10;
    let Lista = [];
    while(Contador >= 1) {
        Lista.push(Contador);
        Contador--;
    }
    alert(`los numeros en array son: ${Lista.join(" - ")}`) 
}