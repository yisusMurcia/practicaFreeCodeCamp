const searchInput= document.getElementById("search-input");
const searchBtn= document.getElementById("search-button");

const pokemonName= document.getElementById("pokemon-name");
const pokemonId= document.getElementById("pokemon-id");
const pokemonWeight= document.getElementById("weight");
const pokemonHeight= document.getElementById("height");
const types= document.getElementById("types");
const pokemonSpecialAtk= document.getElementById("special-attack");
const pokemonSpecialDfe= document.getElementById("special-defense");
const pokemonSpeed= document.getElementById("speed");

const showData= (data)=>{
    const {name, id, weight, height, type, specialAtk, specialDfe, speed}= data;
    pokemonName.innerText= name;
    pokemonId.innerText= id;
    pokemonWeight.innerText= weight;
    pokemonHeight.innerText= height;
    types.innerText= type;
    pokemonSpecialAtk.innerText= specialAtk;
    pokemonSpecialDfe.innerText= specialDfe;
    pokemonSpeed.innerText= speed;
};

const pokemonApi= async ()=>{
    try {
        let pokemonOrId= searchInput.value;
        if(typeof(pokemonOrId)== "string" && pokemonOrId!== pokemonOrId.toLowerCase()){
            pokemonOrId= pokemonOrId.toLowerCase();
        };
        const res= await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonOrId}`);
        const data= await res.json();
        showData(data);
        console.log(data);
    } catch (error) {
        alert("Pokémon not found");
    };
};

searchBtn.addEventListener("click", pokemonApi);