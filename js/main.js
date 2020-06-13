let searchInput = document.querySelector('.search_input')
let clickButton = document.querySelector('.click_button')
let pokemonsElement = document.querySelector('.pokemons');

let x = parseInt( searchInput, 10)
console.log(x)
clickButton.addEventListener()

for(let i = 0; i < pokemons.length; i++){

  let pokemonDataElement = document.createElement('div');
  pokemonDataElement.classList.add('pokemon');

  let pokemonImgElement = document.createElement('img');
  pokemonImgElement.src = pokemons[i].img;
  pokemonImgElement.alt = pokemons[i].name;
  pokemonImgElement.classList.add('pokimon_img');

  let pokemonNameElement = document.createElement('h3');
  pokemonNameElement.textContent =pokemons[i].name;
  pokemonNameElement.classList.add('pokimon_name');


  let pokemonIdElement = document.createElement('p')
  pokemonIdElement.textContent = "Id: " + pokemons[i].id;
  pokemonIdElement.classList.add('id');

  let pokemonNumElement = document.createElement('p')
  pokemonNumElement.textContent = "Num: " + pokemons[i].num;
  pokemonNumElement.classList.add('num');

  let pokemonTypeElement = document.createElement('p')
  pokemonTypeElement.textContent = "Type: " + pokemons[i].type;
  pokemonTypeElement.classList.add('type');

  let pokemonHeightElement = document.createElement('p')
  pokemonHeightElement.textContent = "Height: " + pokemons[i].height;
  pokemonHeightElement.classList.add('height');

  let pokemonWeightElement = document.createElement('p')
  pokemonWeightElement.textContent = "Weight: " + pokemons[i].weight;
  pokemonWeightElement.classList.add('weight');

  let pokemonCantyElement = document.createElement('p')
  pokemonCantyElement.textContent = "Canty: " + pokemons[i].canty;
  pokemonCantyElement.classList.add('canty');

  let pokemonCantycountElement = document.createElement('p')
  pokemonCantycountElement.textContent = "Canty count: " + pokemons[i].candy_count;
  pokemonCantycountElement.classList.add('canty-count');

  let pokemonEggElement = document.createElement('p')
  pokemonEggElement.textContent = "Egg: " + pokemons[i].egg;
  pokemonEggElement.classList.add('egg');

  let pokemonSpawnchanceElement = document.createElement('p')
  pokemonSpawnchanceElement.textContent = "Spawn chance: " + pokemons[i].spawn_chance;
  pokemonSpawnchanceElement.classList.add('spawn-chance');

  let pokemonAvgspawnsElement = document.createElement('p')
  pokemonAvgspawnsElement.textContent = "Avg spawns: " + pokemons[i].avg_spawns;
  pokemonAvgspawnsElement.classList.add('avg-spawns');

  let pokemonSpawntimeElement = document.createElement('p')
  pokemonSpawntimeElement.textContent = "Spawn time: " + pokemons[i].spawn_time;
  pokemonSpawntimeElement.classList.add('spawn-time');

  let pokemonMultipliersElement = document.createElement('p')
  pokemonMultipliersElement.textContent = "Multipliers: " + pokemons[i].multipliers;
  pokemonMultipliersElement.classList.add('multipliers');

  let pokemonWeaknessesElement = document.createElement('p')
  pokemonWeaknessesElement.textContent = "Weaknesses: " + pokemons[i].weaknesses;
  pokemonWeaknessesElement.classList.add('weaknesses');


  pokemonDataElement.appendChild(pokemonImgElement);
  pokemonDataElement.appendChild(pokemonNameElement);
  pokemonDataElement.appendChild(pokemonIdElement)
  pokemonDataElement.appendChild(pokemonNumElement)
  pokemonDataElement.appendChild(pokemonTypeElement)
  pokemonDataElement.appendChild(pokemonHeightElement)
  pokemonDataElement.appendChild(pokemonWeightElement)
  pokemonDataElement.appendChild(pokemonCantyElement)
  pokemonDataElement.appendChild(pokemonCantycountElement)
  pokemonDataElement.appendChild(pokemonEggElement)
  pokemonDataElement.appendChild(pokemonSpawnchanceElement)
  pokemonDataElement.appendChild(pokemonAvgspawnsElement)
  pokemonDataElement.appendChild(pokemonSpawntimeElement)
  pokemonDataElement.appendChild(pokemonMultipliersElement)
  pokemonDataElement.appendChild(pokemonWeaknessesElement)
  pokemonsElement.appendChild(pokemonDataElement)
}

