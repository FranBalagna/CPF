"use strict";
exports.__esModule = true;
var fs = require("fs");
var Stock = /** @class */ (function () {
    function Stock(rutaArchivo) {
        var archivo = fs.readFileSync(rutaArchivo, 'utf8');
        var lineas = archivo.split('\n');
        lineas = lineas.map(function (linea) { return linea.replace('\r', ''); });
        this.items = lineas;
    }
    Stock.prototype.mostrarItems = function () {
        console.log(this.items);
    };
    return Stock;
}());
var stock = new Stock("./info_autos.txt");
stock.mostrarItems();
