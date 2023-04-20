import config from "./config.js";
let storage = JSON.parse(localStorage.getItem('data'))

let contenedor_pokemones = document.querySelector('section');



export default {
    show_all(){
        config.storage()
        function fetch_Pokemon(id) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => res.json())
            .then(data => console.log(data))
        }
        //como respuesta debe almacenar una data específica
        fetch_Pokemon(1)

        function number_pokemons(number){
            for (let i = 0; i < number; i++) {
                fetch_Pokemon(i)
            }
        }

        function create_pokemon(pokemon){
            let card = document.createElementNS('div')
            card.classList.add('pokemon_block')

            let srite_container = document.createElement('div');
            srite_container.classList.add('img_container')

            let sprite = document.createElement('img');
            sprite.src = pokemon.sprites.front_default;
        }

        number_pokemons(9)
    }
}


