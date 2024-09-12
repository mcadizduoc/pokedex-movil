import { PokemonInfo } from "./pokemon-card.interfaces"

const bulbasaurInfo: PokemonInfo = {
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    weight: 69,
    height: 7,
    types: ["grass", "posion"],
    entry: "Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo."
}

const charmanderInfo: PokemonInfo = {
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    weight: 85,
    height: 6,
    types: ["fire"],
    entry: "La llama de su cola indica su fuerza vital. Si está débil, la llama arderá más tenue."
}

const squirtleInfo: PokemonInfo = {
    name: "Squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    weight: 90,
    height: 5,
    types: ["water"],
    entry: "Tras nacer, se le hincha el lomo y se le forma un caparazón. Escupe poderosa espuma por la boca."
}

export const POKEMON_DICTIONARY: Record<string, PokemonInfo> = {
    "bulbasaur": bulbasaurInfo,
    "charmander": charmanderInfo,
    "squirtle": squirtleInfo,
}