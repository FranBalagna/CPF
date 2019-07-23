import Libro from "./Libro"
import * as readlineSync from "./node_modules/readline-sync"

let libros = new Array();

class GestorLibros {
    private libros: Libro[];
    private autor : string;
    private nombre : string;
    private cantDePaginas : number;

    public constructor (libros :Libro[]){
        this.libros = libros
    }

    public insertar() : void {
        this.autor= readlineSync.question("Nombre del autor: ")
        this.nombre= readlineSync.question("Nombre del libro: ")
        this.cantDePaginas= readlineSync.question("Cantidad de paginas: ")
        libros.push(new Libro(this.autor,this.nombre,this.cantDePaginas));
        console.log("Libro agregado con exito!")
    }

    public consultar() : void {
        console.log("Lo que desea buscar: ")
        this.autor= readlineSync.question("Nombre del autor: ");
        this.nombre= readlineSync.question("Nombre del libro: ");
        for (let i = 0; i < libros.length; i++) {
            if (this.autor == libros[i]["autor"] || this.nombre == libros[i]["nombre"]) { 
                console.log("Libro en la posicion "+(i+1));
                console.log(libros[i]);
                return libros[i];
            }
        }  
    }

    public modificar() : void {
        let libroAModificar = this.consultar();
        console.log("Desea modificar autor(opcion 1) o nombre(opcion 2)?");
        let eleccionDeQueModificar = readlineSync.question("Elija la opcion que desea: ");
        switch (eleccionDeQueModificar) {
            case 1:
                libroAModificar["autor"] = readlineSync.question("Escriba el nuevo autor: ")
                console.log(libroAModificar);
                break;
            case 2:
                libroAModificar["nombre"] = readlineSync.question("Escriba el nuevo nombre del libro: ");
                console.log(libroAModificar);
                break;
            default:
                break;
        }
    }
    public eliminar() : void {

    }
}

let gestionarLibros = new GestorLibros (libros);
for (let j = 0; j < 3; j++) {
    gestionarLibros.insertar();
}
gestionarLibros.modificar();