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
var Motor = /** @class */ (function () {
    function Motor(tipo) {
        this.tipo = tipo;
    }
    return Motor;
}());
var Rueda = /** @class */ (function () {
    function Rueda(tamaño) {
        this.tamaño = tamaño;
    }
    return Rueda;
}());
var motor = new Motor("Nafta");
var ruedas = [
    new Rueda(10),
    new Rueda(10),
    new Rueda(10),
    new Rueda(10)
];
var miAuto = new Auto("Fiat", motor, ruedas);
miAuto.acelerar();
console.log(miAuto);
