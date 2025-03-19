console.log("system is working...")

function Suma_indices (){
    let array = [1, 2, 3, 4, 5, 6, 7];
    let suma_array = array[0] + array[5] + array[6];
    let especifico = [0, 5, 6];
    let nordic = especifico.map(i => array[i]).join(" - ");  //.map permite usar los indices impuestos en "especifico"
    alert(`El arreglo es: ${nordic} \nResultado: ${suma_array}`);
}

