//3. Realizar una consulta asíncrona utilizando una función async/await para obtener las
//imágenes correspondientes a los animales. 
//4. Realizar por lo menos una función autoejecutable IIFE.
let animals = ( () => {
    const url = "http://localhost:5500/animales.json";

    const getData = async () => {
        const resolve = await fetch(url);
        const data = await resolve.json();
        return data;
    }
    return { getData };
})();

export default animals;