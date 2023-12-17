//                                      Accessible Variables
const urlBar = 'https://pokeapi.co/api/v2/pokemon/'
const pokeBar = document.querySelector('#pokemon-bar');
const pokeDetails = document.querySelector('#pokemon-details')
const dexForm = document.querySelector('#dex-search')
function randomPokemon(gen1, gen9){
    return Math.floor(Math.random() * (gen9 - gen1 + 1) + gen1)
};

//                                      Data Fetches
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



//                                      Data Displays
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
    const pokeType = id.types.map(pokemon => pokemon.type.name).join(' / ');

    pokeDetails.innerHTML = `
        <div class="card" id="pokemon-details">
            <h2>${id.name}</h2>
            <img src="${id.sprites.other['official-artwork'].front_default}"
                class="full-image" id="pokemon-image"
                defaultPoke="${id.sprites.other['official-artwork'].front_default}"
                shinyPoke="${id.sprites.other['official-artwork'].front_shiny}" />
            <p>Weight: ${id.weight / 10} kilogram(s)</p>
            <p>Height: ${id.height / 10} meter(s)</p>    
            <p class ="type-${id.types[0].type.name}">Type(s): ${pokeType}</p>  
        </div>
    `;
}

//                                      Event Listeners
pokeBar.addEventListener('click', (e) => {
    if(e.target.className === 'pokemon-thumbnail'){
        const pokemonID = e.target.id;
        pokeDetails.innerHTML = '';
        seeMore(pokemonID);
    };
})

document.addEventListener('keydown', (e) => {
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

pokeDetails.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'IMG') {
        const shinyUrl = e.target.getAttribute('shinyPoke');

        if (shinyUrl && shinyUrl !== "null") { //catch the Kitakami Pokemon that don't have updated Shiny urls yet
            e.target.src = shinyUrl;
        } else {
            alert("Shiny form has not been discovered yet!");
        }
    }
});

pokeDetails.addEventListener('mouseout', (e) => {
    if(e.target.tagName === 'IMG') {
        e.target.src = e.target.getAttribute('defaultPoke')
    }
    });

fetchPokemon();