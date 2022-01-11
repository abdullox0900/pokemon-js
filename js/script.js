let elList = document.querySelector(".wrap__list");

for (let pokemon of pokemons) {

     // CREATE
     let elItem = document.createElement("li");
     let elImg = document.createElement("img");
     let elItemDiv = document.createElement("div");
     let pokemonName = document.createElement("h3");
     let pokemonType = document.createElement("p");
     let pokemonWeigth = document.createElement("span");
     let pokemonSpawn = document.createElement("span");
     let pokemonAge = document.createElement("span");
     let pokemonHeardBtn = document.createElement("button");

     //SET-ATRIBUT
     elItem.setAttribute("class", "wrap__item");
     elImg.setAttribute("class", "wrap__img");
     elImg.setAttribute("src", pokemon.img);
     elItemDiv.setAttribute("class", "wrap__item-box");
     pokemonName.setAttribute("class", "wrap__header");
     pokemonType.setAttribute("class", "wrap__type");
     pokemonWeigth.setAttribute("class", "wrap__weight");
     pokemonSpawn.setAttribute("class", "wrap__spawn");
     pokemonAge.setAttribute("class", "wrap__age");
     pokemonHeardBtn.setAttribute("class", "wrap__btn");

     //TEXT CONTENT
     pokemonName.textContent = pokemon.name.slice(0, 10);
     pokemonType.textContent = pokemon.type.slice(0, 10);
     pokemonWeigth.textContent = pokemon.weight;
     pokemonSpawn.textContent = pokemon.avg_spawns;
     pokemonAge.textContent = "age";


     //APPEND
     elList.appendChild(elItem);
     elItem.appendChild(elImg);
     elItem.appendChild(elItemDiv);
     elItemDiv.appendChild(pokemonName);
     elItemDiv.appendChild(pokemonType);
     elItemDiv.appendChild(pokemonWeigth);
     elItemDiv.appendChild(pokemonSpawn);
     pokemonSpawn.appendChild(pokemonAge);
     elItemDiv.appendChild(pokemonHeardBtn);

     pokemonHeardBtn.onclick = function () {
          pokemonHeardBtn.classList.toggle('active');
     }
}
