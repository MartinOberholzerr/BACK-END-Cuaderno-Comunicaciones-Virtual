let DNI:number = 9;
let DatosP:object

class datosP{
    nombre:string;
    apellido:string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const persona = new datosP("Lucas", "Villegas");

console.log(DNI, datosP);