export default class Libro {
    private autor : string;
    private nombre : string;
    private cantDePaginas : number;

    public constructor (autor:string,nombre:string,cantDePaginas:number) {
        this.autor = autor;
        this.nombre = nombre;
        this.cantDePaginas = cantDePaginas;
    }
}


let libroHarryPotter = new Libro("Pepito","harry",55);