import Animals from "./query.js";

document.getElementById("animal").addEventListener("change", async () => {
    const { animales } = await Animals.getData();
    const an = document.getElementById("animal").value;
    const imagesAn = animales.find((a) => a.name == an).imagen;
    document.getElementById("preview").style.backgroundImage = `url(../assets/imgs/${imagesAn})`;
    document.getElementById("preview").style.backgroundSize = "cover";
});