import config from "./config.js";
let storage = JSON.parse(localStorage.getItem('data'));


let contenedor_pokemones = document.querySelector('section');

export default {
    show_all(){
        config.storage()

        document.querySelector('#formulario').addEventListener('submit', (e)=>{
            e.preventDefault();

            let formulario = Object.fromEntries(new FormData(e.target));

            // console.log(formulario);
            
            fetch_Pokemon(`${formulario.buscador}`);

            function fetch_Pokemon(id) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                .then(res => res.json())
                .then(data => console.log(data))
            }

            function number_pokemons(number){
                for (let i = 0; i < number; i++) {
                    fetch_Pokemon(i)
                }
            }
    
            function create_pokemon(pokemon){
                let card = document.createElementNS('div')
                card.classList.add('pokemon_block')
    
                let sprite_container = document.createElement('div');
                sprite_container.classList.add('img_container')
    
                let sprite = document.createElement('img');
                sprite.src = pokemon.sprites.front_default;
    
                sprite_container.appendChild(sprite);
    
                let number = document.querySelector('span')
                number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`
    
                let name = document.querySelector('h2')
                // name.classList.add('name');
                name.textContent = pokemon.name
    
                card.appendChild(sprite_container);
                card.appendChild(number),
                card.appendChild(name);
                pokemon_container(card)
            }

            // number_pokemons('pikachu')


        })
        
    }
}


