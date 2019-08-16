import * as fs from "fs";
import Items from "./Items";

let stock = new Array()

class Kiosko {
    private stock : Items[];
    private lineas : string[];
    private datosItem : string[];
    
    public constructor(stock : Items[]){
        this.stock = stock
    }

    public agregarItems(rutaArchivo : string){
        this.lineas = this.leerArchivo(rutaArchivo);

        for (let i = 0; i < this.lineas.length; i++) {
            this.datosItem = this.separarDatosDelItem(this.lineas, i);    
            
            this.stock.push(new Items(this.datosItem[0],Number(this.datosItem[1]),Number(this.datosItem[2]),Number(this.datosItem[3])));
        }
    }

    private leerArchivo(rutaArchivo): string[] {
        let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
        
        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));
    
        return lineas;
    }

    private separarDatosDelItem(lineas : string[], i : number) : string[] {
        let item : string[] = lineas[i].split(",");
        return item;
    }

    public venderItem(){

    }
    public imprimir (stock){
        for (let i = 0; i < stock.length; i++) {
            console.log(stock[i]);
        }
    }
}

let kiosko1 = new Kiosko(stock);
kiosko1.agregarItems("./info_autos.txt");
kiosko1.imprimir(stock);