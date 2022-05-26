// import Pokemos from './PokemonsDb'
import Api from "./Api"

const pegarPokemons  = () => Api.get('/')
    .then(resposta => resposta.data)

const pegarPokemon = id => Api.get('/')
    .then(resposta => resposta.data.filter(id))
    

export {pegarPokemons, pegarPokemon}