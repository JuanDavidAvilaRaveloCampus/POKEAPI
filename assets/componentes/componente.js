import config from "./config.js";
let storage = JSON.parse(localStorage.getItem('data'))
export default {
    show_all(){
        let img = document.querySelector('img');


        config.storage()
        console.log(storage.info_data.api);
        async function get_pokemon_info(pokemon_name){
            try {
                let name_pokemon = await fetch(`${storage.info_data.api}/${pokemon_name}`);
                let data = await name_pokemon.json();
                console.log(data);
                return data;
            } catch(error) {
                console.log(error);
            };
        };
        
        //Ejemplo de uso de la api
        get_pokemon_info('pikachu').then(data =>{
            console.log(data);
            //aqui se pueden manupular los datos obtenidos según las necesidades
        })
    }
}


