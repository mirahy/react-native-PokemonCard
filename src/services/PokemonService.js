import Pokemos from './PokemonsDb'

const pegarPokemons  = () => Pokemos

const pegarPokemon = id => Pokemos[id -1]

export {pegarPokemons, pegarPokemon}