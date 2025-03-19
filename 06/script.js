console.log("system is working...")

function Producto_pares (){
    let list_p = [2, 4, 6, 7, 10, 12];
    let mult = list_p[0] * list_p[1] * list_p[2] * list_p[4] * list_p[5];
    let indices = [0, 1, 2, 4, 5];
    let compiler = indices.map(i => list_p[i]).join(" - ");
    alert(`El arreglo es: ${compiler} \nResultado: ${mult}`);
}