# Pokémon Roulette

Pokémon Roulette is an application which displays a variety of information for randomly loaded Pokémon while also allowing users to seek out specific Pokémon.

## Initialization

When Pokémon Roulette is loaded, 5 randomly selected Pokémon will be displayed as thumbnails. Users will be shown these Pokémon as well as be given basic instructions on how to use the app's features.

## Features

* Pressing the `R` key allows users to reroll their randomly loaded Pokémon
* Entering a Pokémon's PokéDex Number allows a user to search for a specific Pokémon to be displayed
* Clicking on a Pokémon's thumbnail creates a card with additional information for the respective Pokémon
* Mousing over a Pokémon's image on its displayed card will then display its Shiny Form

## Reroll

If a user wishes to see new, random Pokémon displayed, they may press the `R` key. Doing so will clear the current 5 Pokémon's thumbnails and replace them with 5 new ones without reloading the page itself. This allows the app's other functionalities to persist, unlike after an entire page refresh.

## Search

A user may utilize the search function found above the rendered thumbnails to seek a specific Pokémon. By entering a PokéDex Number, the user can display their favorite Pokémon or learn which Pokémon corresponds to that place in the PokéDex. The respective Pokémon will then be added to the thumbnails of other rendered Pokémon and this process can be repeated as many times as the user wishes.

## See More

When a user clicks on a Pokémon's thumbnail a card is generated that displays the Pokémon in a larger image. This card also gives information on the Pokémon's base height and weight, as well as its Typing. Cards have color-coded borders which correspond to the Pokémon's primary Type. If a user decides to reroll their roulette's selection, the displayed card will remain until the user clicks on a new Pokémon's thumbnail.

## Shiny Form

After a Pokémon's card has been generated, the user is informed that they may mouse over the Pokémon to see its Shiny Form. The Shiny Form is an alternate coloration that all Pokémon have, and the user may see what this form looks like by hovering their mouse over the Pokémon's image. Upon mousing out of the image, the Pokémon will return to its default coloration. Recently, new Pokémon from the Kitakami region have been discovered, whose Shiny Forms have not yet been seen. When these Kitakami Pokémon are moused over, the user is presented with an alert that the alternate colors have no yet been discovered.

## Sources

All Pokémon data featured and rendered in Pokémon Roulette is fetched from the public API [PokeAPI](https://pokeapi.co).