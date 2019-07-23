class Telefono {
    private estaPrendido : boolean;

    constructor(){
        this.estaPrendido = false;
    }

    prenderApagarTelefono() : void {
        if (this.estaPrendido) 
            this.estaPrendido = false;
        else
        this.estaPrendido = true;
    }

    prendido() : boolean {
        return this.estaPrendido;
    }
}

let miTelefono = new Telefono();
miTelefono.prenderApagarTelefono();

console.log("Esta prendido "+miTelefono.prendido());