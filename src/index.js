document.addEventListener("DOMContentLoaded", () => {
    getCharacters()
    getStore()
    formHandler()
})

const getCharacters = () => {
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(data => {
        addCharactersToPage(data);
        renderCharacterDetails(data[0]);
    })
}

const getStore = () => {
    fetch("http://localhost:3000/store")
    .then(res => res.json())
    .then(data => {
        addProductsToPage(data);
        renderProductDetails(data[5]);
    })
}

const addCharactersToPage = (characters) => {

    characters.forEach(character => {

        const scoobyGangContainer = document.querySelector("#scooby-gang_container");
        const img = document.createElement("img");
        img.src = character.image
        img.addEventListener("click", () => renderCharacterDetails(character))
        scoobyGangContainer.append(img);

        })
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

const addProductsToPage = (items) => {

    items.forEach(item => {
    
        const storeItemContainer = document.querySelector("#store_item_container")
        const img = document.createElement("img");
        img.src = item.image;
        img.addEventListener("click", () => renderProductDetails(item))
        storeItemContainer.append(img);
        
        })
}

let currentBag;

const renderProductDetails = (item) => {
    
    currentBag = item;
    const product = document.querySelector("#product_name");
    const image = document.querySelector("#product_image");
    const price = document.querySelector("#product_price")
    const inventory = document.querySelector("#product_inventory")

    product.textContent = item.product_name;
    image.src = item.image;
    price.textContent = `USD $${item.price}`;
    inventory.textContent = `In stock: ${item.inventory}`;
}

const formHandler = ()=> {
    const bagForm = document.querySelector("#bag_form")
    bagForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const userInput = (e.target["bag_amount"].value);
        currentBag.number_in_bag += parseInt(userInput);
        const numberInBag = document.querySelector("#number_in_bag")
        numberInBag.innerText = currentBag.number_in_bag

        bagForm.reset();
    })
}

   