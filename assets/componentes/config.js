export default {
    storage() {
        localStorage.setItem('data', JSON.stringify({
            info_data: {
                api: 'https://pokeapi.co/api/v2/pokemon',
                info_pokemones: []
            }
        }))
    }
}