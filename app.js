
const container = document.querySelector(".container");
console.log (container)
const cardFondo = container.querySelector(".card-fondo");
console.log (cardFondo)
const cardImg = cardFondo.querySelector(".card-img")
console.log (cardImg)
/* const container = document.querySelector(".container");
console.log (container)
const container = document.querySelector(".container");
console.log (container)
const container = document.querySelector(".container");
console.log (container)

 */


async function pegarDados ()  {
    const valor = document.querySelector("#valor").value;
    try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
    const data = await res.json();
    console.log(data);
} catch (error){
    console.log("API fora do Ar");
}
   console.log(valor);
    document.querySelector(".formulario").reset();
}







/*  img
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg" */