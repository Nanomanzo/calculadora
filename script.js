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
let interesCompuesto = document.querySelector(".InteresCompuesto")
let igual = document.querySelector(".igual")

let arryPrimerNumero ="";
let numeroGuardados =[];
let operacion = ""
let resultadoOperaciones;

numero0.addEventListener ("click", agregarNumero);
numero1.addEventListener ("click", agregarNumero);
numero2.addEventListener ("click", agregarNumero);
numero3.addEventListener ("click", agregarNumero);
numero4.addEventListener ("click", agregarNumero);
numero5.addEventListener ("click", agregarNumero);
numero6.addEventListener ("click", agregarNumero);
numero7.addEventListener ("click", agregarNumero);
numero8.addEventListener ("click", agregarNumero);
numero9.addEventListener ("click", agregarNumero);
borrar.addEventListener("click", borrarUltimoNumero);
eliminar.addEventListener("click", borrarTodo)
sumar.addEventListener("click", suma)
igual.addEventListener("click", resultado)
restar.addEventListener("click", resta)
multiplicar.addEventListener("click", multiplo)
dividir.addEventListener("click", division)

//agregar elementos al primer array
function agregarNumero(numero) {
    const numeroElegido = numero.srcElement.textContent;
    arryPrimerNumero += numeroElegido;
    //console.log({arryPrimerNumero, numeroElegido});

    if (arryPrimerNumero[0] == 0) {
        arryPrimerNumero =[]
        return
    }
    
    input.value = arryPrimerNumero
}


//borrar ultimo elemento del array
function borrarUltimoNumero() {
    arryPrimerNumero = arryPrimerNumero.slice(0,-1)
    input.value = arryPrimerNumero

    console.log({arryPrimerNumero});
}

//borrar todo
function borrarTodo() {
    window.location.reload()
}

function suma() {
    numeroGuardados.push(arryPrimerNumero)
    arryPrimerNumero = ""
    input.value = arryPrimerNumero
    operacion = "suma" 
    
     console.log({arryPrimerNumero,
        numeroGuardados,
        operacion,
        resultadoOperaciones}); 
}

function resta() {
    numeroGuardados.push(arryPrimerNumero)
    arryPrimerNumero = ""
    input.value = arryPrimerNumero    
    operacion = "resta"
}

function multiplo() {
    numeroGuardados.push(arryPrimerNumero)
    arryPrimerNumero = ""
    input.value = arryPrimerNumero    
    operacion = "multiplicar"
}

function division() {
    numeroGuardados.push(arryPrimerNumero)
    arryPrimerNumero = ""
    input.value = arryPrimerNumero    
    operacion = "division"
    
}

function resultado() {
    if (operacion == "suma") {
        let sumarNumero = 0;
            if (numeroGuardados.length < 2) {
                resultadoOperaciones = Number(numeroGuardados[0]) + Number(arryPrimerNumero);
                input.value = resultadoOperaciones
                console.log("jaja"); 
            } else {
                for (let i = 0; i < numeroGuardados.length; i++) {
                    sumarNumero += Number(numeroGuardados[i])
                    console.log("jejeje");
                    resultadoOperaciones = Number(arryPrimerNumero) + sumarNumero;
                    input.value = resultadoOperaciones 
                    console.log({sumarNumero,  arryPrimerNumero,numeroGuardados });
                }
            }
    } else if(operacion == "resta"){
        resultadoOperaciones = Number(numeroGuardados[0]) - Number(arryPrimerNumero);
        input.value = resultadoOperaciones
        console.log(resultadoOperaciones);
    }else if(operacion == "multiplicar"){
        resultadoOperaciones = Number(numeroGuardados[0]) * Number(arryPrimerNumero);
        input.value = resultadoOperaciones
        console.log(resultadoOperaciones);
    } else if (operacion == "division"){
        resultadoOperaciones = Number(numeroGuardados[0]) / Number(arryPrimerNumero);
        input.value = resultadoOperaciones
        console.log(resultadoOperaciones);
    }
    
/*     console.log({arryPrimerNumero,
        numeroGuardados,
        operacion,
        resultadoOperaciones}); */


} 

