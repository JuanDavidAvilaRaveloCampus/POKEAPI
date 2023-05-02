import config from "./config.js";
// import 'animate.css';
let storage = JSON.parse(localStorage.getItem('data'));

const fetch_Pokemon = async (name) => {
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


        // let estadisticas = await data.stats
        // let hp = await data.stats[0].base_stat;

        // console.log(data);

        // console.log({
        //     nombre : name,
        //     vida : data.stats[0].base_stat,
        //     ataque : data.stats[1].base_stat,
        //     velocidad : data.stats[5].base_stat,
        //     defensa : data.stats[2].base_stat,
        //     ataque_especial : data.stats[3].base_stat,
        //     defensa_especial : data.stats[4].base_stat
        // });
        pintarCard(data.id, nombre, vida, ataque, velocidad, defensa, ataque_especial, defensa_especial);
    } catch (error) {
        console.log(error);
    }
};

function pintarCard(
    id,
    nombre,
    vida,
    ataque,
    velocidad,
    defensa,
    ataque_especial,
    defensa_especial
) {
    console.log(id);
    //INSETA EL VALOR DE LA VIDA EN EL CSS
    // let barra_vida = document.querySelector('#porcentaje_vida');
    // porcentaje_vida = Number(vida);
    // barra_vida.style.width = porcentaje_vida + '%'
    // for (let i = 0; i < 20; i++) {
        // const element = array[i];

        document.querySelector('#cards').insertAdjacentHTML('beforeend', `   
            <div class="card">
                <img src="./assets/img/img_banner_pokemon_logo/248737.jpg" alt="" class="img_sobre">
                
                <div class="info_card">
                    <h2>${nombre.toUpperCase()}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="" class="img_card">
                    <div class="stadistics">
                        <h3>HP</h3>
                        <div class="caja_porcentajes">
                            <div id="porcentaje_vida" ></div>
                        </div>
                        <span>${vida}</span>

                    </div>
                    <div class="stadistics">
                        <h3>AT</h3>
                        <div class="caja_porcentajes">
                            <div id="porcentaje_ataque" ></div>
                        </div>
                        <span>${ataque}</span>
                    </div>
                    <div class="stadistics">
                        <h3>DF</h3>
                        <div class="caja_porcentajes">
                            <div id="porcentaje_defensa" ></div>
                        </div>
                        <span>${defensa}</span>
                    </div>
                    <div class="stadistics">
                        <h3>VE</h3>
                        <div class="caja_porcentajes">
                            <div id="porcentaje_velocidad" ></div>
                        </div>
                        <span>${velocidad}</span>
                    </div>
                    <div class="stadistics">
                        <h3>AE</h3>
                        <div class="caja_porcentajes">
                            <div id="porcentaje_ataque_especial" ></div>
                        </div>
                        <span>${ataque_especial}</span>
                    </div>
                    <div class="stadistics">
                        <h3>DE</h3>
                        <div class="caja_porcentajes">
                            <div id="porcentaje_defensa_especial" ></div>
                        </div>
                        <span>${defensa_especial}</span>
                    </div>
                    <img src="" alt="">
                    <p></p>
                </div>
            </div>
        `)


        document.querySelector('.card').addEventListener('mouseover',()=>{
            let porcentaje_vida = document.querySelector('#porcentaje_vida');
            let porcentaje_ataque = document.querySelector('#porcentaje_ataque');
            let porcentaje_defensa = document.querySelector('#porcentaje_defensa');
            let porcentaje_velocidad = document.querySelector('#porcentaje_velocidad');
            let 
            
            porcentajes_animacion(porcentaje_vida,vida);
            porcentajes_animacion(porcentaje_ataque,ataque);

            
        });



}
//EL OBJETIVO ES HACER QUE LAS BARRAS TENGAN UNA ANIMACIÓN DINÁMICA
function porcentajes_animacion(elemento,ancho){
    elemento.style.transition = `width 1s ease`;
    elemento.style.width = `${ancho}%`;
    elemento.style.transform = `translateX(1rem)`;
}

function number_pokemons(number) {
    for (let i = 0; i < number; i++) {
        fetch_Pokemon(i)
    }
}

function create_pokemon(pokemon) {
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

// function pokemon_aleatorio(id,nombre,vida,ataque,defensa,velocidad,ataque_especial,defensa_especial){
//     document.querySelector('#cards').insertAdjacentHTML('beforeend',`   
//             <div class="card">
//                 <img src="./assets/img/img_banner_pokemon_logo/248737.jpg" alt="" class="img_sobre">

//                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" alt="" class="img_card animate__animated">
//                 <div class="info_card">
//                     <h2>${nombre}</h2>
//                     <div class="stadistics">
//                         <h2>HP</h2>
//                         <span>${vida}</span>
//                     </div>
//                     <div class="stadistics">
//                         <h3>Ataque</h3>
//                         <span>${ataque}</span>
//                     </div>
//                     <div class="stadistics">
//                         <h3>Defensa</h3>
//                         <span>${defensa}</span>
//                     </div>
//                     <div class="stadistics">
//                         <h3>Velocidad</h3>
//                         <span>${velocidad}</span>
//                     </div>
//                     <div class="stadistics">
//                         <h3>Ataque Especial</h3>
//                         <span>${ataque_especial}</span>
//                     </div>
//                     <div class="stadistics">
//                         <h3>Defensa especial</h3>
//                         <span>${defensa_especial}</span>
//                     </div>
//                     <img src="" alt="">
//                     <p></p>
//                 </div>
//             </div>
//         `)
// }

export default {
    show_all() {
        config.storage()

        document.querySelector('#formulario').addEventListener('submit', (e) => {
            e.preventDefault();

            let formulario = Object.fromEntries(new FormData(e.target));



            fetch_Pokemon(`${formulario.buscador.toLowerCase()}`);
        },
        )
    }
}


