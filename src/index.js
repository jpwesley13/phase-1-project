const urlBar = 'https://pokeapi.co/api/v2/pokemon/'
function randomPokemon(gen1, gen9){
    return Math.floor(Math.random() * (gen9 - gen1 + 1) + gen1)
};

const fetchPokemon = () => {
    for (let i = 0; i < 5; i++) {
        let pokeDex = randomPokemon(1, 1017);

    fetch(urlBar+pokeDex)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    }
};

fetchPokemon();


