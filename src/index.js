//                      Accessible Variables
const urlBar = 'https://pokeapi.co/api/v2/pokemon/'
const pokeBar = document.querySelector('#pokemon-bar');
const pokeDetails = document.querySelector('#pokemon-details')
const pokeImage = document.querySelector('#pokemon-image')
const dexForm = document.querySelector('#dex-search')
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

const searchPokemon = (dexNumber) => {
    const soughtPokemon = [];
    const apiUrl = urlBar + dexNumber;
  console.log(apiUrl);
    
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        soughtPokemon.push(data);
        pokeThumbnails(soughtPokemon)
    })
}

function seeMore(id){
    fetch(urlBar+`${id}`)
    .then(res => res.json())
    .then(data => {
        mainCard(data)
        console.log(data)
        console.log(mainCard(data))})
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
    class="full-image" id="491"/>
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

dexForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pokedexNumber = document.getElementById('pokedex-number').value;
    searchPokemon(pokedexNumber);
    dexForm.reset()
})



//Work in Progress version
pokeDetails.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target.tagName === 'IMG') {
        const baseUrl = e.target.src;
        const shinyUrl = e.target.shinyPoke;

        if(baseUrl === shinyUrl){
            e.target.src = e.target.defaultPoke
        } else {
            e.target.src = shinyUrl
        }
    }
})

// Functional pokeBar version version
pokeBar.addEventListener('click', function(e){
    console.log(e.target)
    if(e.target.tagName === 'IMG') {
        const baseUrl = e.target.src;
        const shinyUrl = e.target.shinyPoke;

        if(baseUrl === shinyUrl){
            e.target.src = e.target.defaultPoke
        } else {
            e.target.src = shinyUrl
        }
    }
})

//Static URL functioning version
// pokeDetails.addEventListener('click', function(e){
//     if(e.target.tagName === 'IMG') {
//         const baseUrl = e.target.src;
//         const shinyUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1008.png";

//         if(baseUrl === shinyUrl){
//             e.target.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png"
//         } else {
//             e.target.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1008.png"
//         }
//     }
// })

fetchPokemon();