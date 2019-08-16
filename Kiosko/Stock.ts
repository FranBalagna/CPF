import * as fs from "fs";

class Stock {
    private items : string[];

    constructor (rutaArchivo: string){
        let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
        
        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));
        this.items = lineas
    }

    public mostrarItems() {
        console.log(this.items);
    }
}

let stock = new Stock("./info_autos.txt");

stock.mostrarItems();