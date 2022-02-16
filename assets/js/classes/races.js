import Animal from "./animal.js"

//1. Crear las clases representadas en el diagrama implementando la herencia indicada.

class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    rugir(){
        let sound = document.getElementById("player");
        sound = animales.sonido;
        return sound.play();
    }
}

class Lobo extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    aullar(){
        let sound = document.getElementById("player");
        sound = animales.sonido;
        return sound.play();
    }
}

class Oso extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    grunir(){
        let sound = document.getElementById("player");
        sound = animales.sonido;
        return sound.play();
    }
}

class Serpiente extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    sisear(){
        let sound = document.getElementById("player");
        sound = animales.sonido;
        return sound.play();
    }
}

class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }
    chillar(){
        let sound = document.getElementById("player");
        sound = animales.sonido;
        return sound.play();
    }
}

export {Leon, Lobo, Oso, Serpiente, Aguila};