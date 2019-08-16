class Auto {
    private estaPrendido : boolean;
    private acelerar : number;
    private nafta : number;

    constructor(){
        this.estaPrendido = false;
    }

    public prenderApagarAuto() {
        if (this.estaPrendido) 
            this.estaPrendido = false;
        else 
            this.estaPrendido = true;
    }

    public acelerarAuto(){
        this.acelerar = this.acelerar + 1;
    }

    public frenarAuto() {
        this.acelerar = 0;
    }

    public cargarNafta(){
        this.nafta = this.nafta + 1;
    }
}

let primerAuto = new Auto();
primerAuto.cargarNafta();