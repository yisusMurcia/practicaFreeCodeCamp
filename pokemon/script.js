const searchInput= document.getElementById("search-input");
const searchBtn= document.getElementById("search-button");

const pokemoneName= document.getElementById("pokemon-name");
const pokemonId= document.getElementById("pokemon-id");
const weight= document.getElementById("weight");
const height= document.getElementById("height");
const types= document.getElementById("types");
const specialAtk= document.getElementById("special-attack");
const specialDfe= document.getElementById("special-defense");
const speed= document.getElementById("speed");

const pokemonApi= async ()=>{
    const res= await fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon");
    const data= await res.json()
    return data;
};