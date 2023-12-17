# Pokémon Roulette

Pokémon Roulette is an application which displays a variety of information for randomly loaded Pokémon while also allowing users to seek out specific Pokémon.

## Initialization

When Pokémon Roulette is loaded, 5 randomly selected Pokémon from the pokeapi.co API will be displayed as thumbnails. Users will be shown these Pokémon as well as be given basic instructions on how to use the app's features.

## Features

* Pressing the `R` key allows users to reroll their randomly loaded Pokémon
* Entering a Pokémon's PokéDex Number allows a user to search for a specific Pokémon to be displayed
* Clicking on a Pokémon's thumbnail creates a card with additional information for the respective Pokémon
* Mousing over a Pokémon's image on its displayed card will then display its Shiny Form

## Reroll

If a user wishes to see new, random Pokémon displayed, they may press the `R` key. Doing so will clear the current 5 Pokémon's thumbnails and replace them with 5 new ones without reloading the page itself. This allows the app's other functionalities to persist, unlike after an entire page refresh.

## Search

A user may utilize the search function found above the rendered thumbnails to seek a specific Pokémon. By entering a PokéDex Number, the user can seek their favorite Pokémon or learn which Pokémon corresponds to that place in the PokéDex. The respective Pokémon will then be added to the thumbnails of other rendered Pokémon and this process can be repeated as many times as the user wishes.