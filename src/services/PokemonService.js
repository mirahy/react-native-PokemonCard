import Pokemos from './PokemonsDb'

const pegarPokemons  = () => Pokemos

const pegarPokemon = id => Pokemos[id]

export {pegarPokemons, pegarPokemon}