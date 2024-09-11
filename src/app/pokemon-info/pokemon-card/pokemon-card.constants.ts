import { PokemonInfo } from "./pokemon-card.interfaces"

const bulbasaurInfo: PokemonInfo = {
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    weight: 69,
    height: 7,
    types: ["grass", "posion"]
}

const charmanderInfo: PokemonInfo = {
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    weight: 85,
    height: 6,
    types: ["fire"]
}

const squirtleInfo: PokemonInfo = {
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    weight: 90,
    height: 5,
    types: ["water"]
}

export const POKEMON_DICTIONARY: Record<string, PokemonInfo> = {
    "bulbasaur": bulbasaurInfo,
    "charmander": charmanderInfo,
    "squirtle": squirtleInfo
}