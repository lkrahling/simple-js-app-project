// Array to store Pokemon data objects 

let pokemonList = [
    {
        name: "Bulbasaur", 
        height: 7, 
        types: ["grass", "poison"]
    },

    {
        name: "Ivysaur", 
        height: 1, 
        types: ["grass", "poison"]
    },

    {
        name: "Venusaur", 
        height: 2, 
        types: ["grass", "poison"]
    },
];

for (let i=0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + ") ");
 }

 for (let i=0; i < pokemonList.length; i++)
    if (pokemonList[i].height <= 1) {
      console.log(pokemonList[i].name + " is a small pokemon!");
    
    } else if(pokemonList[i].height >1 && pokemonList[i].height <=3) {
      console.log(pokemonList[i].name + " is an average pokemon!");
    
    } else {
      console.log(pokemonList[i].name + " is a large pokemon!");
    }