import Pokemos from './PokemonsDb'
import Api from "./Api"

const pegarPokemons  = () => Api.get('/')
    .then(resposta => resposta.data)

//const pegarPokemon = id => Pokemos[id]

const pegarPokemon = id => Api.get('/')
    .then(resposta => resposta.data.push(id))
    

export {pegarPokemons, pegarPokemon}