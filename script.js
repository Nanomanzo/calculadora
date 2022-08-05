let input = document.querySelector(".inputOperaciones");
let eliminar = document.querySelector(".eliminar");
let borrar = document.querySelector(".borrar");
let dividir = document.querySelector(".dividir");
let numero7 = document.querySelector(".siete");
let numero8 = document.querySelector(".ocho");
let numero9 = document.querySelector(".nueve");
let multiplicar = document.querySelector(".multiplicar");
let numero4 = document.querySelector(".cuatro");
let numero5 = document.querySelector(".cinco");
let numero6 = document.querySelector(".seis");
let restar = document.querySelector(".restar");
let numero1 = document.querySelector(".uno");
let numero2 = document.querySelector(".dos");
let numero3 = document.querySelector(".tres");
let sumar = document.querySelector(".sumar");
let numero0 = document.querySelector(".cero");
let decimal = document.querySelector(".decimal");
let contendorResultados = document.querySelector(".contendorResultados");

let arryPrimerNumero =[];
let arrySegundoNumero = [];

numero0.addEventListener ("click", agregarNumero0);
numero1.addEventListener ("click", agregarNumero1);
numero2.addEventListener ("click", agregarNumero2);
numero3.addEventListener ("click", agregarNumero3);
numero4.addEventListener ("click", agregarNumero4);
numero5.addEventListener ("click", agregarNumero5);
numero6.addEventListener ("click", agregarNumero6);
numero7.addEventListener ("click", agregarNumero7);
numero8.addEventListener ("click", agregarNumero8);
numero9.addEventListener ("click", agregarNumero9);



function agregarNumero0() {
    arryPrimerNumero.push("0");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}

function agregarNumero1() {
    arryPrimerNumero.push("1");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}

function agregarNumero2() {
    arryPrimerNumero.push("2");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}

function agregarNumero3() {
    arryPrimerNumero.push("3");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}

function agregarNumero4() {
    arryPrimerNumero.push("4");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}

function agregarNumero5() {
    arryPrimerNumero.push("5");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}

function agregarNumero6() {
    arryPrimerNumero.push("6");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}

function agregarNumero7() {
    arryPrimerNumero.push("7");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}

function agregarNumero8() {
    arryPrimerNumero.push("8");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}

function agregarNumero9() {
    arryPrimerNumero.push("9");
    console.log(arryPrimerNumero);
    input.value = arryPrimerNumero;
}


