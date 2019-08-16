import * as readlineSync from "./node_modules/readline-sync";
import * as fs from "fs";
import Auto from "./Auto";
import Motor from "./Motor";
import Rueda from "./Rueda"

let autos = new Array();

class RegistroAutomotor {
    private autos: Auto[];
    private marca : string;
    private motor : Motor;
    private datosDelAuto : string[];
    private lineas : string[];

    public constructor (autos :Auto[]){
        this.autos = autos
        
        this.lineas = this.leerArchivo();
        let rueda : Rueda;
        for (let i = 0; i < this.lineas.length; i++) {
            this.datosDelAuto = this.separarDatosDelAuto(this.lineas, i);    
            this.motor = new Motor (this.datosDelAuto[2]);
            rueda = new Rueda (25);
            autos.push(new Auto(this.datosDelAuto[0],this.motor,rueda));
        }
    }

    public leerArchivo(): string[] {
        let archivo: string = fs.readFileSync("./info_autos.txt", 'utf8');
        
        let lineas: string[] = archivo.split('\n');
        lineas = lineas.map(linea => linea.replace('\r', ''));
    
        return lineas;
    }

    public separarDatosDelAuto(lineas : string[], i : number) : string[] {
        let auto : string[] = lineas[i].split(",");
        return auto;
    }


    public imprimir (autos){
        for (let i = 0; i < autos.length; i++) {
            console.log(autos[i]);
        }
    }

    // public insertar() : void {
    //     // this.marca= readlineSync.question("Marca del auto: ")
    //     // this.motor= readlineSync.question("Tipo de motor: ")
    //     // this.ruedas= readlineSync.question("Aire de las ruedas: ")
    //     // autos.push(new Auto(this.marca,this.motor,this.ruedas));
    //     let datosDelAuto : string[];
    //     let lineas = this.leerArchivo();
    //     let rueda : Rueda;
    //     for (let i = 0; i < lineas.length; i++) {
    //         datosDelAuto = this.separarDatosDelAuto(lineas, i);    
    //         this.motor = new Motor (datosDelAuto[2]);
    //         rueda = new Rueda (25)
    //         autos.push(new Auto(datosDelAuto[0],this.motor,rueda));
    //     }
    //     console.log("Autos agregados con exito!");
    // }

    public consultar() : void {
        console.log("Lo que desea buscar: ")
        this.marca= readlineSync.question("Marca del auto: ");
        this.motor= readlineSync.question("Tipo de motor: ");
        for (let i = 0; i < autos.length; i++) {
            if (this.marca == autos[i]["marca"] || this.motor == autos[i]["motor"]) { 
                console.log("Auto en la posicion "+(i+1));
                console.log(autos[i]);
                return autos[i];
            }
        }  
    }

    public modificar() : void {
        let autoAModificar = this.consultar();
        console.log("Desea modificar marca(opcion 1) o motor(opcion 2)?");
        let eleccionDeQueModificar = readlineSync.question("Elija la opcion que desea: ");
        switch (eleccionDeQueModificar) {
            case 1:
                autoAModificar["marca"] = readlineSync.question("Escriba la nueva marca: ")
                console.log(autoAModificar);
                break;
            case 2:
                autoAModificar["motor"] = readlineSync.question("Escriba el nuevo tipo de motor: ");
                console.log(autoAModificar);
                break;
            default:
                break;
        }
    }
    public eliminar() : void {

    }
}

let registro = new RegistroAutomotor(autos);

registro.imprimir(autos);
