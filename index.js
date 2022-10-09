fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(data => {
        forEachCharcter(data);
    })


const forEachCharcter = (character) => {
    character.forEach(addCharactersToPage)
}

const addCharactersToPage = (character) => {

    const scoobyGangContainer = document.querySelector("#scooby-gang_container");
    const img = document.createElement("img");
    img.src = character.image
    img.addEventListener("click", () => {
        renderCharacterDetails(character) 
           
    })
    scoobyGangContainer.append(img);
}

const renderCharacterDetails = (character) => {

    const name = document.querySelector("#character_name");
    const image = document.querySelector("#character_image");
    const description = document.querySelector("#character_description");
    const catchphrase = document.querySelector("#character_catchphrase");

    name.textContent = `${character.name}! `;
    image.src = character.image;
    description.textContent = character.description;
    catchphrase.textContent = `Catchphrase:${character.catchphrase}`;
}