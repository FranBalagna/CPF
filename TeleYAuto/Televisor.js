var Televisor = /** @class */ (function () {
    function Televisor(modelo, controlRemoto, volumenInicial, canalInicial) {
        this.modelo = modelo;
        this.controlRemoto = controlRemoto;
        if (volumenInicial < 0 || volumenInicial == undefined)
            this.volumenActual = 0;
        else
            this.volumenActual = volumenInicial;
        if (canalInicial < 0 || canalInicial == undefined)
            this.canalActual = 0;
        else
            this.canalActual = canalInicial;
    }
    Televisor.prototype.prenderApagar = function () {
        if (this.prendidoApagado)
            this.prendidoApagado = false;
        else
            this.prendidoApagado = true;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.volumenActual >= 0)
            this.volumenActual = this.volumenActual - 1;
        else
            console.log("Volumen minimo.");
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.canalActual >= 0)
            this.canalActual = this.canalActual - 1;
        else
            console.log("Canal minimo.");
    };
    return Televisor;
}());
var Modelo = /** @class */ (function () {
    function Modelo(modeloDeTelevisor) {
        this.modeloDeTelevisor = modeloDeTelevisor;
    }
    return Modelo;
}());
var modelo = new Modelo("Led");
var Control = /** @class */ (function () {
    function Control(modeloDeControl) {
        this.modeloDeControl = modeloDeControl;
    }
    return Control;
}());
var controlRemoto = new Control("Samsung");
var primerTelevisor = new Televisor(modelo, controlRemoto, -10, 50);
console.log(primerTelevisor);
