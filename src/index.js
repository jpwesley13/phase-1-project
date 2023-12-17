//                      Accessible Variables
const urlBar = 'https://pokeapi.co/api/v2/pokemon/'
const pokeBar = document.querySelector('#pokemon-bar');
const pokeDetails = document.querySelector('#pokemon-details')
const pokeImage = document.querySelector('#pokemon-image')
function randomPokemon(gen1, gen9){
    return Math.floor(Math.random() * (gen9 - gen1 + 1) + gen1)
};

//                  Data Fetches
const fetchPokemon = () => {
    const pokemonArray = []; //create empty array to hold data so forEach can be applied properly.

    for (let i = 0; i < 5; i++) {
        let pokeDex = randomPokemon(1, 1017);

    fetch(urlBar+pokeDex)
    .then(res => res.json())
    .then(data => {
        pokemonArray.push(data);
        if(pokemonArray.length === 5){ //once all 5 Pokemon have been added to the array, then their thumbnails can be made
        pokeThumbnails(pokemonArray)
        }
    })
    .catch(error => console.error(error))
    };
};

function seeMore(id){
    fetch(urlBar+`${id}`)
    .then(res => res.json())
    .then(data => mainCard(data))
    .catch(error => console.error(error))
    };



//                  Data Displays
function pokeThumbnails(pokemon) {
  pokemon.forEach(monster => {
    const pokePic = document.createElement('img');
    pokePic.classList.add('pokemon-thumbnail');
    pokePic.id = monster.id;
    pokePic.defaultPoke = monster.sprites.other['official-artwork'].front_default;
    pokePic.shinyPoke = monster.sprites.other['official-artwork'].front_shiny;
    pokePic.src = pokePic.defaultPoke;

    pokeBar.appendChild(pokePic);
  });
}

function mainCard(id){
    pokeDetails.innerHTML = `
  <div class="card" id="pokemon-details">
    <h2>${id.name}</h2>
    <img src="${id.sprites.other['official-artwork'].front_default}"
    class="full-image" id="pokemon-image"/>
    <p>Weight: ${id.weight / 10} kilogram(s)</p>
    <p>Height: ${id.height / 10} meter(s)</p>
    
  </div>
  `;
};

//                  Event Listeners
pokeBar.addEventListener('click', function(e) {
    if(e.target.className === 'pokemon-thumbnail'){
        const pokemonID = e.target.id;
        pokeDetails.innerHTML = '';
        seeMore(pokemonID);
    };
})

document.addEventListener('keydown', function(e) {
    if(e.key === 'r'){
        pokeBar.innerHTML = '';
        fetchPokemon();
    };
});

pokeDetails.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG') {
        const baseUrl = pokeImage.src;
        const shinyUrl = e.target.shinyPoke;

        if(baseUrl === shinyUrl){
            e.target.src = e.target.defaultPoke
        } else {
            e.target.src = shinyUrl
        }
    }
})

fetchPokemon();