class Auto {
    private velocidad : number;
    private marca : string;
    private motor : Motor;
    private ruedas : Rueda[];

    public constructor(marca:string, motor:Motor,ruedas:Rueda[]){
        this.velocidad = 0;
        this.marca = marca;
        this.motor = motor;
        this.ruedas = ruedas;
    }

    public acelerar() : void{
        this.velocidad += 10;
    }
}

class Motor {
    private tipo : string;

    constructor(tipo:string) {
        this.tipo = tipo;
    }
}

class Rueda {
    private tamaño : number;

    constructor (tamaño:number) {
        this.tamaño = tamaño;
    }
}

let motor : Motor = new Motor ("Nafta")
let ruedas : Rueda[] = [
    new Rueda(10),
    new Rueda(10),
    new Rueda(10),
    new Rueda(10)
]

let miAuto = new Auto("Fiat",motor,ruedas);
miAuto.acelerar();

console.log(miAuto);