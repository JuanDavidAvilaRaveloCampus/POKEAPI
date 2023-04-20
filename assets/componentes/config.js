export default {
    storage() {
        localStorage.setItem('data', JSON.stringify({
            info_data: {
                info_pokemones: []
            }
        }))
    }
}