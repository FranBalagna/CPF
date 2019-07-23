"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, motor, ruedas) {
        this.velocidad = 0;
        this.marca = marca;
        this.motor = motor;
        this.ruedas = ruedas;
    }
    Auto.prototype.acelerar = function () {
        this.velocidad += 10;
    };
    return Auto;
}());
exports["default"] = Auto;
// let motor : Motor = new Motor ("Nafta")
// let ruedas : Rueda[] = [
//     new Rueda(10),
//     new Rueda(10),
//     new Rueda(10),
//     new Rueda(10)
// ]
// let miAuto = new Auto("Fiat",motor,ruedas);
// miAuto.acelerar();
// console.log(miAuto);
