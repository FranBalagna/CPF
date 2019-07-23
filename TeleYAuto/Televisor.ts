class Televisor {
    private volumenActual : number;
    private canalActual : number;
    private prendidoApagado : boolean;
    private modelo : Modelo;
    private controlRemoto : Control;

    public constructor(modelo:Modelo,controlRemoto:Control,volumenInicial? : number, canalInicial? : number) {
        this.modelo = modelo;
        this.controlRemoto = controlRemoto;
        if (volumenInicial < 0 || volumenInicial == undefined )
            this.volumenActual = 0;
        else
            this.volumenActual = volumenInicial

        if (canalInicial < 0 || canalInicial == undefined)
            this.canalActual = 0;
        else
            this.canalActual = canalInicial;
    }

    public prenderApagar() : void {
        if (this.prendidoApagado) 
            this.prendidoApagado = false;
        else
            this.prendidoApagado = true;    
    }

    public subirVolumen() : void {
        this.volumenActual = this.volumenActual + 1;
    }

    public bajarVolumen() : void {
        if (this.volumenActual>=0)
            this.volumenActual = this.volumenActual - 1;
        else 
            console.log("Volumen minimo.")
    }

    public subirCanal() : void {
        this.canalActual = this.canalActual + 1;
    }

    public bajarCanal() : void {
        if (this.canalActual>=0)
            this.canalActual = this.canalActual - 1;
        else 
            console.log("Canal minimo.")
    }
}

class Modelo {
    private modeloDeTelevisor : string;
    public constructor(modeloDeTelevisor:string){
        this.modeloDeTelevisor = modeloDeTelevisor;
    }
}

let modelo = new Modelo ("Led");

class Control {
    private modeloDeControl : string;
    public constructor(modeloDeControl:string) {
        this.modeloDeControl = modeloDeControl;
    }
}

let controlRemoto = new Control ("Samsung")

let primerTelevisor : Televisor = new Televisor(modelo,controlRemoto,-10,50);

console.log(primerTelevisor);

