// Fetch the whole objects from the JSON file
function fetchCats() {
    return fetch('./data/cats.json')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error("Error fetching cats:", error));
}

// Fetch the 'header-picture' and 'name' of each cat using fetchCats()
function fetchCatHeaders() {
    fetchCats()
        .then(data => {
            // Get the element of the container for gallery-nav-items
            const galleryNavContainer = document.getElementsByClassName("gallery-nav-content")[0];

            // Initialize a variable to keep track of the current parent div
            let currentNavItemDiv = null;

            // Iterate through each cat in the data
            data.cat.forEach((cat, index) => {

                // Create a new gallery-nav-item div if needed
                if (index % 3 === 0) {
                    if (currentNavItemDiv) {
                        // Append the completed gallery-nav-item div to the container
                        galleryNavContainer.appendChild(currentNavItemDiv);
                    }

                    // Create a new gallery-nav-item div
                    currentNavItemDiv = document.createElement("div");
                    currentNavItemDiv.className = "gallery-nav-item font-semibold";
                }

                // Create a new nav-item-content div
                const navItemContentDiv = document.createElement("div");
                navItemContentDiv.className = "nav-item-content";

                // Create a new img element
                const newImg = document.createElement("img");
                newImg.src = cat["header-picture"];
                newImg.alt = cat["name"];

                // Create a span for the name
                const textSpan = document.createElement("span");
                textSpan.textContent = cat["name"];

                // Append the img and textSpan to the nav-item-content div
                navItemContentDiv.appendChild(newImg);
                navItemContentDiv.appendChild(textSpan);

                // Append the nav-item-content div to the current gallery-nav-item div
                currentNavItemDiv.appendChild(navItemContentDiv);

                // Add click event listener to display cat pictures when header is clicked
                navItemContentDiv.addEventListener("click", () => {
                    displayCatPictures(cat);
                });
            });

            // Append the last gallery-nav-item div if any
            if (currentNavItemDiv) {
                galleryNavContainer.appendChild(currentNavItemDiv);
            }
        })
        .catch(error => console.error("Error fetching cat headers:", error));
}

// Fetch and display the pictures of a specific cat
function fetchCatPictures() {
    fetchCats()
        .then(data => {
            // Initialize display for the first cat in the list
            if (data.cat.length > 0) {
                displayCatPictures(data.cat[0]);
            }
        })
        .catch(error => console.error("Error fetching cat pictures:", error));
}

function displayCatPictures(cat) {
    // Get gallery-main-content div
    const picturesContainer = document.querySelector(".gallery-main-content");

    // Clear previous pictures
    picturesContainer.innerHTML = "";

    // Create a new div for the selected cat's pictures
    const catPicturesDiv = document.createElement("div");
    catPicturesDiv.className = "gallery-main-item";

    // Add the cat's pictures to the catPicturesDiv
    cat.pictures.forEach(picture => {
        const imgElement = document.createElement("img");
        imgElement.src = picture;
        imgElement.alt = cat.name;
        imgElement.className = "cat-picture";
        catPicturesDiv.appendChild(imgElement);
    });

    // Append the catPicturesDiv to the picturesContainer
    picturesContainer.appendChild(catPicturesDiv);
}

// Horizontal scrolling for the gallery-nav-content
function horizontalScrolling() {
    // Get the scroll container and buttons
    const scrollContainer = document.querySelector(".gallery-nav-content");
    const backBtn = document.getElementById("back-btn");
    const nextBtn = document.getElementById("next-btn");

    // Add event listeners to the buttons
    backBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: -scrollContainer.clientWidth,
            behavior: "smooth"
        });
    });

    nextBtn.addEventListener("click", () => {
        scrollContainer.scrollBy({
            left: scrollContainer.clientWidth,
            behavior: "smooth"
        });
    });
}

// Hide and show the navbar when scrolling
function navbarScroll() {
    const navbar = document.querySelector(".navbar");
    let lastScrollY = 0;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            navbar.classList.add("hidden");
        } else {
            navbar.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    });
}

// Switch modes between light and dark
function switchModes() {
    const body = document.querySelector("body");
    const modeBtn = document.getElementById("mode-btn");

    modeBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

}

document.addEventListener("DOMContentLoaded", () => {
    // Call fetching functions
    fetchCats();
    fetchCatHeaders();
    fetchCatPictures();

    // Call scrolling functions
    horizontalScrolling();
    navbarScroll();
    switchModes();
});
