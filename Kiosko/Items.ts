export default class Items {
    private nombre : string;
    private precio : number;
    private costo : number;
    private cantidad : number;

    public constructor(nombre : string, precio : number, costo:number, cantidad : number) {
        this.nombre = nombre
        this.precio = precio
        this.costo = costo
        this.cantidad = cantidad
    }
    
}