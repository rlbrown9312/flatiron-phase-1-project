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
    