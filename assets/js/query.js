let animals = (() => {
    const url = "http://localhost:5500/animales.json";

    const getData = async () => {
        const resolve = await fetch(url);
        const data = await resolve.json();
        return data;
    }
    return(getData);
})();

export default animals;