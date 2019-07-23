"use strict";
exports.__esModule = true;
var Libro_1 = require("./Libro");
var readlineSync = require("./node_modules/readline-sync");
var libros = new Array();
var GestorLibros = /** @class */ (function () {
    function GestorLibros(libros) {
        this.libros = libros;
    }
    GestorLibros.prototype.insertar = function () {
        this.autor = readlineSync.question("Nombre del autor: ");
        this.nombre = readlineSync.question("Nombre del libro: ");
        this.cantDePaginas = readlineSync.question("Cantidad de paginas: ");
        libros.push(new Libro_1["default"](this.autor, this.nombre, this.cantDePaginas));
        console.log("Libro agregado con exito!");
    };
    GestorLibros.prototype.consultar = function () {
        console.log("Lo que desea buscar: ");
        this.autor = readlineSync.question("Nombre del autor: ");
        this.nombre = readlineSync.question("Nombre del libro: ");
        for (var i = 0; i < libros.length; i++) {
            if (this.autor == libros[i]["autor"] || this.nombre == libros[i]["nombre"]) {
                console.log("Libro en la posicion " + (i + 1));
                console.log(libros[i]);
                return libros[i];
            }
        }
    };
    GestorLibros.prototype.modificar = function () {
        var libroAModificar = this.consultar();
        console.log("Desea modificar autor(opcion 1) o nombre(opcion 2)?");
        var eleccionDeQueModificar = readlineSync.question("Elija la opcion que desea: ");
        switch (eleccionDeQueModificar) {
            case 1:
                libroAModificar["autor"] = readlineSync.question("Escriba el nuevo autor: ");
                console.log(libroAModificar);
                break;
            case 2:
                libroAModificar["nombre"] = readlineSync.question("Escriba el nuevo nombre del libro: ");
                console.log(libroAModificar);
                break;
            default:
                break;
        }
    };
    GestorLibros.prototype.eliminar = function () {
    };
    return GestorLibros;
}());
var gestionarLibros = new GestorLibros(libros);
for (var j = 0; j < 3; j++) {
    gestionarLibros.insertar();
}
gestionarLibros.modificar();
