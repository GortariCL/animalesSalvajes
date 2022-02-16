//2. Crear las instancias de las clases utilizando los datos del formulario.
class Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        let Nombre = nombre;
        let Edad = edad;
        let Img = img;
        let Comentarios = comentarios;
        let Sonido = sonido;

        this._getNombre = () => Nombre;
        this._getEdad = () => Edad;
        this._getImg = () => Img;
        this._getComentarios = () => Comentarios;
        this._getSonido = () => Sonido;

        this._setComentarios = (nuevo_comentario) => Comentarios = nuevo_comentario;
    }

    get getNombre(){
        return this._getNombre();
    }
    get getEdad(){
        return this._getEdad();
    }
    get getImg(){
        return this._getImg();
    }
    get getComentarios(){
        return this._getComentarios();
    }
    get getSonido(){
        return this._getSonido();
    }
    set setComentarios(nuevo_comentario){
        this._setComentarios(nuevo_comentario);
    }
}

export default Animal;