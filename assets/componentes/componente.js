import config from "./config.js";
let storage = JSON.parse(localStorage.getItem('data'));

const fetch_Pokemon = async (name) =>{
    try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
        // res.name
        // let nameentificador = await data.name;

        let data = await res.json();
        let nombre = name;
        let vida = data.stats[0].base_stat;
        let ataque = data.stats[1].base_stat;
        let velocidad = data.stats[5].base_stat;
        let defensa = data.stats[2].base_stat;
        let ataque_especial = data.stats[3].base_stat;
        let defensa_especial = data.stats[4].base_stat;


        let estadisticas = await data.stats
        // let hp = await data.stats[0].base_stat;

        console.log(data);

        console.log({
            nombre : name,
            vida : data.stats[0].base_stat,
            ataque : data.stats[1].base_stat,
            velocidad : data.stats[5].base_stat,
            defensa : data.stats[2].base_stat,
            ataque_especial : data.stats[3].base_stat,
            defensa_especial : data.stats[4].base_stat
        });


        pintarCard(data.id,name)

    } catch (error) {
        console.log(error);
    }
};

function pintarCard(id,name){
    console.log(id);
    document.querySelector('#cards').insertAdjacentHTML('beforeend',`   
        <div class="card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="" class="img_card">
            <div class="info_card">
                <h2>${name}</h2>
                
                <img src="" alt="">
                <p></p>
            </div>
        </div>
    `)
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

export default {
    show_all(){
        config.storage()

        document.querySelector('#formulario').addEventListener('submit', (e)=>{
            e.preventDefault();

            let formulario = Object.fromEntries(new FormData(e.target));
            
            fetch_Pokemon(`${formulario.buscador}`);
            // img(`https://pokeapi.co/api/v2/pokemon/${id}/`)


            // fetch_Pokemon()

            
                    // .then(res => res.json())
                    // .then(data => console.log(data))
                


                
            },


            

            // number_pokemons('pikachu')


        )
        
    }
}


