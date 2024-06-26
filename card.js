const characters = [
    {
        id: 1,
        name: "Iron Man",
        images: {
            sm: "./iron man.webp"
        },
        biography: {
            firstAppearance: "Tales of Suspense ",
            publisher: "Marvel Comics",
            alignment: "good"
        },
        powerstats: {
            intelligence: 90,
            strength: 80,
            speed: 70,
            durability: 60,
            power: 50,
            combat: 40
        }
    },
    {
        id: 2,
        name: "Captain America",
        images: {
            sm: "./captain-america.jpg"
        },
        biography: {
            firstAppearance: "Captain America Comics ",
            publisher: "Marvel Comics",
            alignment: "good"
        },
        powerstats: {
            intelligence: 80,
            strength: 90,
            speed: 60,
            durability: 70,
            power: 40,
            combat: 50
        }
    },
    {
        id: 3,
        name: "Batman",
        images: {
            sm: "./batman-8510027_640.webp"
        },
        biography: {
            firstAppearance: "Detective Comics ",
            publisher: "DC Comics",
            alignment: "good"
        },
        powerstats: {
            intelligence: 95,
            strength: 70,
            speed: 50,
            durability: 60,
            power: 30,
            combat: 60
        }
    },
    {
        id: 4,
        name: "Joker",
        images: {
            sm: "./joker.jpg"
        },
        biography: {
            firstAppearance: "Batman ",
            publisher: "DC Comics",
            alignment: "bad"
        },
        powerstats: {
            intelligence: 80,
            strength: 40,
            speed: 30,
            durability: 50,
            power: 20,
            combat: 70
        }
    },
    {
        id: 5,
        name: "Spider-Man",
        images: {
            sm: "./230057_Spider-Man3_2007_1400x2100_US_1.jpg"
        },
        biography: {
            firstAppearance: "Amazing Fantasy ",
            publisher: "Marvel Comics",
            alignment: "good"
        },
        powerstats: {
            intelligence: 70,
            strength: 60,
            speed: 80,
            durability: 50,
            power: 40,
            combat: 60
        }
    },
    {
        id: 6,
        name: "Wonder Woman",
        images: {
            sm: "./wonder.jpg"
        },
        biography: {
            firstAppearance: "Sensation Comics ",
            publisher: "DC Comics",
            alignment: "good"
        },
        powerstats: {
            intelligence: 80,
            strength: 90,
            speed: 70,
            durability: 80,
            power: 50,
            combat: 60
        }
    }
];

let searchValue = "";
let filterValue = "";
let publisherFilterValue = "";

const searchInput = document.getElementById("search-input");
const filterSelect = document.getElementById("filter-select");
const publisherSelect = document.getElementById("publisher-select");
const cardContainer = document.getElementById("card-container");

searchInput.addEventListener("input", (e) => {
    searchValue = e.target.value.toLowerCase();
    renderCards();
});

filterSelect.addEventListener("change", (e) => {
    filterValue = e.target.value.toLowerCase();
    renderCards();
});

publisherSelect.addEventListener("change", (e) => {
    publisherFilterValue = e.target.value;
    renderCards();
});

const renderCards = () => {
    const filteredCharacters = characters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchValue) &&
            character.biography.alignment.toLowerCase().includes(filterValue) &&
            ((character.biography.publisher && character.biography.publisher === publisherFilterValue) || publisherFilterValue === '')
        );
    });
  
    cardContainer.innerHTML = "";
  
    filteredCharacters.forEach((character) => {
        const cardHTML = `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-header-title">${character.name}</h3>
                </div>
                <div class="card-image">
                    <figure class="image image-is-1by1">
                        <img src="${character.images.sm}" alt="${character.name}">
                    </figure>
                </div>
                <div class="card-content">
                    <h5>First Appearance: ${character.biography.firstAppearance}</h5>
                    <h5>Publisher: ${character.biography.publisher}</h5>
                    <h5>Alignment: ${character.biography.alignment}</h5>
                    <h5>Powerstats:</h5>
                    <ul>
                        <li>Intelligence: ${character.powerstats.intelligence}</li>
                        <li>Strength: ${character.powerstats.strength}</li>
                        <li>Speed: ${character.powerstats.speed}</li>
                        <li>Durability: ${character.powerstats.durability}</li>
                        <li>Power: ${character.powerstats.power}</li>
                        <li>Combat: ${character.powerstats.combat}</li>
                    </ul>
                </div>
            </div>
        `;
        cardContainer.innerHTML += cardHTML;
    });
  };
  
  renderCards();
  