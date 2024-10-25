// Function to create the cards dynamically
document.addEventListener('DOMContentLoaded', function () {
    const intelLogo = document.getElementById('intelLogo');
    const logoContainer = document.querySelector('.logoContainer');
    const logoContainerSmall = document.querySelector('.logoContainerSmall');
    const banner = document.querySelector('.banner');
    const cardsContainer = document.getElementById('cards-container');

    // Add click event listener on intelLogo
    intelLogo.addEventListener('click', function () {
        // Fade out the logo
        logoContainer.classList.add('hidden');
        logoContainer.classList.remove('visible');
        logoContainerSmall.classList.remove('hidden');

        // After a delay (matching the CSS transition), show the landing page content
        setTimeout(() => {
            banner.classList.add('visible');
            banner.classList.remove('hidden');
            cardsContainer.classList.add('visible');
            cardsContainer.classList.remove('hidden');

            logoContainer.remove()

            // Call createCards AFTER the fade-in starts to ensure the cards are visible
            fetchCardData();
        }, 1000); // Matches the transition time
    });
});

// Fetch data from the JSON file
function fetchCardData() {
    fetch('cards.json')
        .then(response => response.json())
        .then(data => {
            createCards(data);
        })
        .catch(error => {
            console.error("Error fetching card data:", error);
        });
}

// Function to create the cards dynamically
function createCards(cards) {
    const container = document.getElementById('cards-container');

    cards.forEach(card => {
        // Create card elements
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('img-div');

        const cardImage = document.createElement('img');
        cardImage.src = card.image;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = card.title;

        const cardSubtitle = document.createElement('h4');
        cardSubtitle.classList.add('card-subtitle');
        cardSubtitle.innerText = card.subtitle;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card-description');
        cardDescription.innerText = card.description;

        const cardHover = document.createElement('div');
        cardHover.classList.add('card-hover');

        // Card hover content (structured like the image)
        const hoverDescription = document.createElement('p');
        hoverDescription.innerText = card.hoverDescription;

        const hoverTitle = document.createElement('p');
        hoverTitle.classList.add('hover-title');
        hoverTitle.innerText = card.hoverTitle;

        const hoverResultDescription = document.createElement('p');
        hoverResultDescription.classList.add('hover-description');
        hoverResultDescription.innerText = card.hoverResultDescription;

        const featureTitle = document.createElement('p');
        featureTitle.classList.add('hover-title');
        featureTitle.innerText = card.featureTitle;

        const featureDescription = document.createElement('p');
        featureDescription.classList.add('hover-description');
        featureDescription.innerText = card.features;

        // Append content to hover card
        cardHover.appendChild(hoverDescription);
        cardHover.appendChild(hoverTitle);
        cardHover.appendChild(hoverResultDescription);
        cardHover.appendChild(featureTitle);
        cardHover.appendChild(featureDescription);

        // Append content to card
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardSubtitle);
        cardContent.appendChild(cardDescription);

        cardDiv.appendChild(imgDiv);
        imgDiv.appendChild(cardImage);

        cardDiv.appendChild(cardContent);
        cardDiv.appendChild(cardHover);

        container.appendChild(cardDiv);
    });
}
