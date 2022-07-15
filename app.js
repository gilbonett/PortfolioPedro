

async function pegarDados ()  {
    const valor = document.querySelector("#valor").value;
    await pokeData();
   console.log(valor);
   /*  document.querySelector(".formulario").reset(); */
}


const pokeData = async (id) => {
try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
} catch (error){
    console.log("API fora do Ar");
}
}






/*  img
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg" */