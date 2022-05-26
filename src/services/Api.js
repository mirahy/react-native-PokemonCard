import axios from 'react-native-axios'

const BASE_FOTO = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

let Api = axios.create({
  baseURL: 'https://pokemon-db-json.herokuapp.com',
  timeout: 10000
})

export default Api
export { BASE_FOTO }