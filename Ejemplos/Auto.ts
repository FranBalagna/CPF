class Auto {
    private estaPrendido : boolean;
    private acelerar : number;
    private nafta : number;

    constructor(){
        this.estaPrendido = false;
    }

    prenderApagarAuto() {
        if (this.estaPrendido) 
            this.estaPrendido = false;
        else 
            this.estaPrendido = true;
    }

    acelerarAuto(){
        this.acelerar = this.acelerar + 1;
    }

    frenarAuto() {
        this.acelerar = 0;
    }

    cargarNafta(){
        this.nafta = this.nafta + 1;
    }
}

let primerAuto = new Auto();
primerAuto.cargarNafta();