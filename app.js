class Usuario {
    constructor( nombre, apellido ){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }
    getfullName(){
        console.log(`El nombre completo es ${this.nombre} ${this.apellido}`)
    }
    addMascota( mascota ){
        this.mascotas.push(mascota)
        console.log(this.mascotas)
    }
    countMascotas(){
        console.log(this.mascotas.length)
    }
    addBook( nombre, autor ){
        const libro = {
            nombre,
            autor
        }
        this.libros.push(libro)
    }
    getBookNames(){
        this.libros.map((e)=>{
            console.log(e.nombre)
        })
    }
}

const usuario1 = new Usuario('Jonathan','Alvarado')
usuario1.getfullName()
usuario1.addMascota('Gato')
usuario1.addMascota('Perro')
usuario1.addMascota('Perico')
usuario1.countMascotas()
usuario1.addBook('El señor de las moscas','William Golding')
usuario1.addBook('Fundación','Isaac Asimov')
usuario1.getBookNames()