const searchInput= document.getElementById("search-input");
const searchBtn= document.getElementById("search-button");

const pokemonName= document.getElementById("pokemon-name");
const pokemonId= document.getElementById("pokemon-id");
const pokemonHp= document.getElementById("hp");
const pokemonWeight= document.getElementById("weight");
const pokemonHeight= document.getElementById("height");
const typesEL= document.getElementById("types");
const attack= document.getElementById("attack");
const defense= document.getElementById("defense");
const pokemonSpecialAtk= document.getElementById("special-attack");
const pokemonSpecialDfe= document.getElementById("special-defense");
const pokemonSpeed= document.getElementById("speed");
const divEl= document.querySelector(".stats");

const showData= (data)=>{
    const {name, id, weight, height, types, sprites, stats}= data;
    pokemonName.innerText= name;
    pokemonId.innerText= `#${id}`;
    pokemonWeight.innerText= weight;
    pokemonHeight.innerText= height;
    typesEL.innerHTML= types.map(obj => `<span>${obj.type.name.toUpperCase()}</span>`)
    .join('');
    const img= document.getElementById("sprite") || document.createElement("img");
    img.src= sprites.front_default;
    img.id= "sprite";
    divEl.appendChild(img)
    pokemonHp.innerText= stats[0].base_stat;
    attack.innerText= stats[1].base_stat;
    defense.innerText= stats[2].base_stat
    pokemonSpecialAtk.innerText= stats[3].base_stat;
    pokemonSpecialDfe.innerText= stats[4].base_stat;
    pokemonSpeed.innerText= stats[5].base_stat;
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
    } catch (error) {
        alert("Pokémon not found");
    };
};

searchBtn.addEventListener("click", pokemonApi);