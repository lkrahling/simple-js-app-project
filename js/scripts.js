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

  let sizeMessage = '';
  if (pokemonList[i].height <= 1) {
      sizeMessage = " - This is a small pokemon!";
  } else if(pokemonList[i].height >1 && pokemonList[i].height <=3) {
      sizeMessage = " - This is an average pokemon!";
  } else {
      sizeMessage = " - Wow, that's a large pokemon!";
  }
  document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + ")" + sizeMessage + "<br>");
}