//este es mi código javascript

//suma dos numeros y devuelve el valor
function suma( valor1, valor2) {

    return valor1 + valor2;    

}

function resta( valor1, valor2) {

    return valor1 - valor2;    

}



//realiza la operacion de suma
function realizarOperacionSuma() {

    console.log("Realizando operacion suma");

    //obrtener numero1

    var num1 = document.getElementById('txtNumero1').value;

    num1 = Number(num1);

    //otener numero2

    var num2 = document.getElementById('txtNumero2').value;

    num2 = Number(num2);

    //realizarr la suma

    if (!isNaN(num1) && !isNaN(num2)) {

       var result = suma( num1, num2);

    } else {

        console.log("No se puede hacer la suma");
        return;

    }


    //mostrar el resultado en la etiqueta

    console.log("El resultado es: " + result);

    var lblResultado = document.getElementById('resultadoOpSum');

    lblResultado.innerHTML = result.toFixed(2);

}

//realiza la operacion de resta
function realizarOperacionResta() {

    console.log("Realizando operacion resta");

    //obrtener numero1

    var num1 = document.getElementById('txtNumero1').value;

    num1 = Number(num1);

    //otener numero2

    var num2 = document.getElementById('txtNumero2').value;

    num2 = Number(num2);

    //realizarr la suma

    if (!isNaN(num1) && !isNaN(num2)) {

       var result = resta( num1, num2);

    } else {

        console.log("No se puede hacer la resta");
        return;

    }


    //mostrar el resultado en la etiqueta

    console.log("El resultado es: " + result);

    var lblResultado = document.getElementById('resultadoOpRes');

    lblResultado.innerHTML = result.toFixed(2);

}

//funcion inicializadora
function init() {

    //obtener la refertencia al boton de sumar (brnSumar)
    var btnSumar = document.getElementById('btnSumar');


    //obtener la refertencia al boton de restar (brnRetar)
    var btnRestar = document.getElementById('btnRetar');

    btnSumar.addEventListener('click', realizarOperacionSuma );
    btnRestar.addEventListener('click', realizarOperacionResta );

}

//Cuando se carga el DOm se carga a init
window.onload = init;