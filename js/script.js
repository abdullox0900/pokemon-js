let elList = document.querySelector(".wrap__list");
let elBtn = document.querySelector(".wrapper__btn");
let elBody = document.body;

for (let pokemon of pokemons) {

     // CREATE
     let elItem = document.createElement("li"),
          elImg = document.createElement("img"),
          elItemDiv = document.createElement("div"),
          pokemonName = document.createElement("h3"),
          pokemonType = document.createElement("p"),
          pokemonWeigth = document.createElement("span"),
          pokemonSpawn = document.createElement("span"),
          pokemonAge = document.createElement("span"),
          pokemonHeardBtn = document.createElement("button");

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


     // CREATE MODAL-PANEL
     let elModal = document.createElement("div"),
          elOverlay = document.createElement("div"),
          elModalContent = document.createElement("div"),
          elModalClose = document.createElement("div");

     elModal.setAttribute("class", "modal-panel");
     elOverlay.setAttribute("class", "modal__overlay");
     elModalContent.setAttribute("class", "content");
     elModalClose.setAttribute("class", "close-btn");

     elBody.appendChild(elModal);
     elModal.appendChild(elOverlay);
     elModal.appendChild(elModalContent);
     elModalContent.appendChild(elModalClose)

     elBtn.onclick = function () {
          elModal.style.display = "inline";
     }

     elModalClose.onclick = function () {
          elModal.style.display = "none";
     }

     pokemonHeardBtn.onclick = function () {
          pokemonHeardBtn.classList.toggle('active');


     }

}
