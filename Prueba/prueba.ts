import * as ReadlineSync from "./node_modules/readline-sync";
import * as binarySearch from "./node_modules/@extra-array/binary-search";
import * as sort from "./node_modules/fast-sort"

let arregloNombres: string[] = new Array ();
let opciones: number;
let nombreABuscar : string;
let numEnArreglo : number;
let nombre : string;

menu();


function menu() {
    console.log("1_agregar");
    console.log("2_eliminar");
    console.log("3_ordenar");
    console.log("4_buscar");
    console.log("0_salir");
    console.log(" ");
    opciones = ReadlineSync.questionInt("Elija una opcion: ");
    switch (opciones) {
        case 1:
            agregarNombre(arregloNombres);
            mostrarLista();
            menu();
            break;
        case 2:
            eliminarNombre();
            mostrarLista();
            menu();
            break;
        case 3:
            ordenarLista();
            mostrarLista();
            menu();
            break;
        case 4:
            nombre = buscarNombre();
            console.log(nombre);
            mostrarLista();
            menu();
            break;
        case 0:
            
            break;
        default:
            console.log(" ");
            console.log("Esta opcion no existe.");
            console.log("Vuelva a intentarlo.");
            console.log(" ");
            menu();
            break;
    }
}

function mostrarLista() {
    for (let j = 0; j < arregloNombres.length; j++) {
        console.log(arregloNombres[j])
    }
    console.log(" ")
}

function agregarNombre(arregloNombres) {   
    arregloNombres.push(ReadlineSync.question("Nombre:"));
}

function eliminarNombre() {
    nombreABuscar = ReadlineSync.question("Nombre a eliminar: ");
    numEnArreglo = binarySearch(arregloNombres,nombreABuscar);
    return arregloNombres[numEnArreglo] = "Nombre eliminado.";
}

function ordenarLista() {
    return sort(arregloNombres).asc();
}

function buscarNombre() {
    nombreABuscar = ReadlineSync.question("Nombre a buscar: ");
    numEnArreglo = binarySearch(arregloNombres,nombreABuscar);
    return arregloNombres[numEnArreglo]
}
