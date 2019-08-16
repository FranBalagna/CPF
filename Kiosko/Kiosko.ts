import * as fs from "fs";


class Kiosko {
    private Stock : Items[];
    
    public constructor(){
    }

    public agregarLibros(rutaArchivo : string){
        let archivo: string = fs.readFileSync(rutaArchivo, 'utf8');
        
        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));
        
        this.Stock = lineas
    }

    public venderItem(){

    }
}