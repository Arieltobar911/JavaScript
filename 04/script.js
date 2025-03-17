console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    // Tu código aquí
    let ahora = parseInt(prompt("Ingrese Año Actual"));     //prompt es como un input, solicitando un numero y almacenandolo, parse Transforma de strings a int
    let fecha_nac = parseInt(prompt("Ingrese De Nacimiento")); // crea la variable fecha_nac que es lo puesto en el prompt en valor numero entero
    let edad = ahora - fecha_nac // crea la variable edad, que es la resta de ahora con fecha_nac
    alert("Edad: " + edad + ".")      // muestra los numeros almacenados por prompts
}
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.

    function asignarValores() { // crea la funcion asignarValores
        let var1 = prompt("ingrese un valor.") //esta variable equivale a lo escrito en el prompt
        let var2 = var1 //var2 equivale a var 1 xdddddd
        alert("el valor de var2 es: " + var2) //da alerta que el valor de var2 es y menciona su respectiva variable
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.

    function realizarOperaciones() { //c4ea la funcion realizarOperaciones
        let num1 = parseInt(prompt("ingrese num1.")) //num1, 2, 3 variables descritas por el input digo prompt
        let num2 = parseInt(prompt("ingrese num2.")) //donde tu las escribes
        let num3 = parseInt(prompt("ingrese num3."))
        let suma = num1 + num2 + num3 //suma es la suma de las variables num1-3
        let resta = num1 - num3 //resta es la resta de las variables num1 y num3
        let multiplica = num2 * num3 //multiplica es la multiplicacion de las variables num2 y num3 
        let divide = num1 / 120 //divide es la division de num1 y 120

        alert("Resultados:\n" + //da la alerta con los resultados, \n es seguir la linea(tanto en JavaScript como en Python)
            "Suma: " + suma + "\n" + 
            "Resta: " + resta + "\n" + 
            "Multiplicación: " + multiplica + "\n" + 
            "División: " + divide);     //muestra los resultados de la suma, resta, multiplicacion y division con sus respectivas variables
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)

    function manipularCadenas() { //crea la funcion manipularCadenas (o strings)
        let direccion = prompt("ingresa direccion") //crea la variable direccion escrita en el prompt por ti
        let n_casa = parseInt(prompt("ahora ingresa sus numero de direccion")) //crea la variable n_casa, la misma funcion de la anterior, pero solo con numeros enteros
        let mensaje = direccion + "" + n_casa; //crea la variable mensaje, mostrando la direccion y el numero de casa 
        alert("La dirección es: " + mensaje + //crea la alerta que muestra el mensaje, 
            "\nCantidad de caracteres: " + mensaje.length + //la longutid del mensaje
            "\nCarácter antepenúltimo: " + direccion[direccion.length - 3]);//y esta linea muestra el antepenultimo caracter de la direccion
    }