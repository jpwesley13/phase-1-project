//                                      Global Access
const urlBar = 'https://pokeapi.co/api/v2/pokemon/'
const pokeBar = document.querySelector('#pokemon-bar');
const pokeDetails = document.querySelector('#pokemon-details')
const dexForm = document.querySelector('#dex-search')
function randomPokemon(gen1, gen9){
    return Math.floor(Math.random() * (gen9 - gen1 + 1) + gen1)
};
function properNoun(string) {
    return string.charAt(0).toUpperCase()+string.slice(1);
}

//                                      Data Fetches
const fetchPokemon = () => {
    const pokemonArray = [];

    for (let i = 0; i < 5; i++) {
        let pokeDex = randomPokemon(1, 1017);

    fetch(urlBar+pokeDex)
    .then(res => res.json())
    .then(data => {
        pokemonArray.push(data);
        if(pokemonArray.length === 5){
        pokeThumbnails(pokemonArray)
        }
    })
    .catch(error => console.error(error))
    };
};

const searchPokemon = (dexNumber) => {
    const soughtPokemon = [];
    const apiUrl = urlBar + dexNumber;
    
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        soughtPokemon.push(data);
        pokeThumbnails(soughtPokemon)
    })
    .catch(error => console.error(error))
};

function seeMore(id){
    fetch(urlBar+`${id}`)
    .then(res => res.json())
    .then(data => {
        mainCard(data)
        })
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
      pokePic.title = `#${monster.id} | ${monster.name.split("-").map(word => properNoun(word)).join(" ")}`;
  
      pokeBar.appendChild(pokePic);
    });
  }

function mainCard(id){
    const pokeType = id.types.map(pokemon => properNoun(pokemon.type.name)).join(' / ');

    pokeDetails.innerHTML = `
        <div class="card" id="pokemon-details">
            <h2 class ="type-${id.types[0].type.name}">${id.name.split("-").map(word => properNoun(word)).join(" ")}</h2>
            <img src="${id.sprites.other['official-artwork'].front_default}"
                class="full-image" id="pokemon-image"
                defaultPoke="${id.sprites.other['official-artwork'].front_default}"
                shinyPoke="${id.sprites.other['official-artwork'].front_shiny}" />
            <h4 class ="hover">Mouse over to see Shiny Form</h4>
            <p>Height: ${id.height / 10} meter(s) | Weight: ${id.weight / 10} kilogram(s)</p>
            <p></p>    
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
    if(!isNaN(pokedexNumber)){
    searchPokemon(pokedexNumber);
    } else {
        alert("Please enter a number between 1 and 1017.")
    };
    dexForm.reset()
})

pokeDetails.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'IMG') {
        const shinyUrl = e.target.getAttribute('shinyPoke');

        if (shinyUrl && shinyUrl !== "null") {
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