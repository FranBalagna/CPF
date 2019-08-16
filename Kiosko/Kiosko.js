"use strict";
exports.__esModule = true;
var fs = require("fs");
var Items_1 = require("./Items");
var stock = new Array();
var Kiosko = /** @class */ (function () {
    function Kiosko(stock) {
        this.stock = stock;
    }
    Kiosko.prototype.agregarItems = function (rutaArchivo) {
        this.lineas = this.leerArchivo(rutaArchivo);
        for (var i = 0; i < this.lineas.length; i++) {
            this.datosItem = this.separarDatosDelItem(this.lineas, i);
            this.stock.push(new Items_1["default"](this.datosItem[0], Number(this.datosItem[1]), Number(this.datosItem[2]), Number(this.datosItem[3])));
        }
    };
    Kiosko.prototype.leerArchivo = function (rutaArchivo) {
        var archivo = fs.readFileSync(rutaArchivo, 'utf8');
        var lineas = archivo.split('\n');
        lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
        return lineas;
    };
    Kiosko.prototype.separarDatosDelItem = function (lineas, i) {
        var item = lineas[i].split(",");
        return item;
    };
    Kiosko.prototype.venderItem = function () {
    };
    Kiosko.prototype.imprimir = function (stock) {
        for (var i = 0; i < stock.length; i++) {
            console.log(stock[i]);
        }
    };
    return Kiosko;
}());
var kiosko1 = new Kiosko(stock);
kiosko1.agregarItems("./info_autos.txt");
kiosko1.imprimir(stock);
