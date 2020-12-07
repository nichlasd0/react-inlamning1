import http from '../PokemonAPI'

const searchForPokemon = (userSearch: any) => {
    return http.get(`/${userSearch}`)
}

export default {
    searchForPokemon
}