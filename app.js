async function pegarDados ()  {
    const valor = document.querySelector("#valor").value;
    try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
    const data = await res.json();
    document.querySelector("#fondo").classList.add("card-fondo")
    document.querySelector(".imgPoke").setAttribute("src", data.sprites.other.dream_world.front_default)
    document.querySelector(".card-nome").textContent = data.name;
    document.querySelector(".card-exp").textContent = ((data.id));
    document.querySelector(".weight").textContent = data.weight;
    document.querySelector(".peso").textContent = "Peso";
    document.querySelector(".height").textContent = data.height;
    document.querySelector(".altura").textContent = "Altura";
} catch (error){
    console.log("API fora do Ar"); 
}
console.log(valor);
    document.querySelector(".formulario").reset();
}







