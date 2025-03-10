console.log("System is on live, Welcome...")

let numeroEntero = 50; //test02----------
function Alert02(){
    alert("tu numero entero es: " + numeroEntero)
};

let numeroDecimal = 2.9; //test03----------
function Alert03(){
    alert("tu numero decimal es: " + numeroDecimal)
};

let cadenaTexto = "Forgotten Empires"; //test04---------
function Alert04(){
    alert("tu Cadena de texto es: " + cadenaTexto)
};

let booleano = true; //tes05-------
function Alert05(){
    alert("la ayuda de IA aqui es: " + booleano)
};

let arreglos = ["Ascencion", 7, 15, 1, 2, 19, 7]; //tes06--------
function Alert06(){
    alert("Pan Comido: " + arreglos.join(", "))
};

let Objeto = { //tes07 usar : en lugar de = en este caso ---------
    nombre: "Ariel", 
    nacionalidad: "chileno", 
    edad: 17
}; 
function Alert07(){
    alert("Tu objeto es: " + JSON.stringify(Objeto))//encadena texto en JSON, transformandolo en un string
};

let indefinida = undefined; //tes08 -----------
function Alert08(){
    alert("indefinido en ingles es: " + indefinida)
};

let SinValor = null; //tes09------------
function Alert09(){
    alert("nulo en ingles es: " + SinValor)
};

function sumar(a, b){ //tes01 --------------
    return a + b; //suma de letras
}; 

let resultado = sumar(3, 5); //le da valor a la suma de letras
//le dan la respuesta a resultado, para usarlo en la alerta
function Alert01(){
    alert("tu resultado es: "+ resultado);
}