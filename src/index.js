const urlBar = 'https://pokeapi.co/api/v2/pokemon/'
function randomPokemon(gen1, gen9){
    return Math.floor(Math.random() * (gen9 - gen1 + 1) + gen1)
};

const fetchPokemon = () => {
    const pokemonArray = []; //create empty array to hold data so forEach can be applied properly.

    for (let i = 0; i < 5; i++) {
        let pokeDex = randomPokemon(1, 1017);

    fetch(urlBar+pokeDex)
    .then(res => res.json())
    .then(data => {
        pokemonArray.push(data);
        if(pokemonArray.length === 5){ //once all 5 Pokemon have been added to the array, then their thumbnails can be made
        makeThumbnail(pokemonArray)
        }
    })
    .catch(error => console.error(error))
    }
};

const pokeBar = document.querySelector('#pokemon-bar');

function makeThumbnail(pokemon){
    pokemon.forEach(monster => {
        const pokePic = document.createElement('img');
        pokePic.classList.add('pokemon-thumbnail');
        pokePic.dataset.id = monster.id;
        pokePic.src = monster.sprites.other['official-artwork'].front_default;

        pokeBar.appendChild(pokePic);
    })
}

fetchPokemon();

