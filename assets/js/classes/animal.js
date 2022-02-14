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

        this.setComentarios = (nuevo_comentario) => Comentarios = nuevo_comentario;
    }

    get getNombre(){
        return this._getNombre();
    }
    get getEdad(){
        return this._getEdad();
    }
    get getIMg(){
        return this._getImg();
    }
    get getComentarios(){
        return this._getComentarios();
    }
    set setComentarios(nuevo_comentario){
        this._getComentarios(nuevo_comentario);
    }
    get getSonido(){
        return this._getSonido();
    }
}

export default Animal;