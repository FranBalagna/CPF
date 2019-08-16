"use strict";
exports.__esModule = true;
var readlineSync = require("./node_modules/readline-sync");
var fs = require("fs");
var Auto_1 = require("./Auto");
var Motor_1 = require("./Motor");
var Rueda_1 = require("./Rueda");
var autos = new Array();
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(autos) {
        this.autos = autos;
        this.lineas = this.leerArchivo();
        var rueda;
        for (var i = 0; i < this.lineas.length; i++) {
            this.datosDelAuto = this.separarDatosDelAuto(this.lineas, i);
            this.motor = new Motor_1["default"](this.datosDelAuto[2]);
            rueda = new Rueda_1["default"](25);
            autos.push(new Auto_1["default"](this.datosDelAuto[0], this.motor, rueda));
        }
    }
    RegistroAutomotor.prototype.leerArchivo = function () {
        var archivo = fs.readFileSync("./info_autos.txt", 'utf8');
        var lineas = archivo.split('\n');
        lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
        return lineas;
    };
    RegistroAutomotor.prototype.separarDatosDelAuto = function (lineas, i) {
        var auto = lineas[i].split(",");
        return auto;
    };
    RegistroAutomotor.prototype.imprimir = function (autos) {
        for (var i = 0; i < autos.length; i++) {
            console.log(autos[i]);
        }
    };
    // public insertar() : void {
    //     // this.marca= readlineSync.question("Marca del auto: ")
    //     // this.motor= readlineSync.question("Tipo de motor: ")
    //     // this.ruedas= readlineSync.question("Aire de las ruedas: ")
    //     // autos.push(new Auto(this.marca,this.motor,this.ruedas));
    //     let datosDelAuto : string[];
    //     let lineas = this.leerArchivo();
    //     let rueda : Rueda;
    //     for (let i = 0; i < lineas.length; i++) {
    //         datosDelAuto = this.separarDatosDelAuto(lineas, i);    
    //         this.motor = new Motor (datosDelAuto[2]);
    //         rueda = new Rueda (25)
    //         autos.push(new Auto(datosDelAuto[0],this.motor,rueda));
    //     }
    //     console.log("Autos agregados con exito!");
    // }
    RegistroAutomotor.prototype.consultar = function () {
        console.log("Lo que desea buscar: ");
        this.marca = readlineSync.question("Marca del auto: ");
        this.motor = readlineSync.question("Tipo de motor: ");
        for (var i = 0; i < autos.length; i++) {
            if (this.marca == autos[i]["marca"] || this.motor == autos[i]["motor"]) {
                console.log("Auto en la posicion " + (i + 1));
                console.log(autos[i]);
                return autos[i];
            }
        }
    };
    RegistroAutomotor.prototype.modificar = function () {
        var autoAModificar = this.consultar();
        console.log("Desea modificar marca(opcion 1) o motor(opcion 2)?");
        var eleccionDeQueModificar = readlineSync.question("Elija la opcion que desea: ");
        switch (eleccionDeQueModificar) {
            case 1:
                autoAModificar["marca"] = readlineSync.question("Escriba la nueva marca: ");
                console.log(autoAModificar);
                break;
            case 2:
                autoAModificar["motor"] = readlineSync.question("Escriba el nuevo tipo de motor: ");
                console.log(autoAModificar);
                break;
            default:
                break;
        }
    };
    RegistroAutomotor.prototype.eliminar = function () {
    };
    return RegistroAutomotor;
}());
var registro = new RegistroAutomotor(autos);
registro.imprimir(autos);
