// Start Global Rules
let icon = document.querySelector(".icons");
let nav = document.querySelector("nav");

document.addEventListener("click", function (e) {
    // Check if the icon have been clicked and it contain the close class
    if (e.target === icon && icon.classList.contains("show")) {
        // if so then remove the show class
        icon.classList.remove("show");
    } else if (e.target === icon) {
        // if the close class doesn't exist
        // then add the show class
        icon.classList.add("show");
    }
    // everytime there is click on the website except the icon the show class will be removed
    if (e.target !== icon && icon.classList.contains("show")) {
        icon.classList.remove("show");
    }
});
// End Global Rules

// Start Destination Page

// Get Data From data.json file (didn't learn how to get it from the file in js yet)
let destinationData = [
    {
        name: "Moon",
        images: {
            png: "./assets/destination/image-moon.png",
            webp: "./assets/destination/image-moon.webp",
        },
        description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
    {
        name: "Mars",
        images: {
            png: "./assets/destination/image-mars.png",
            webp: "./assets/destination/image-mars.webp",
        },
        description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
    },
    {
        name: "Europa",
        images: {
            png: "./assets/destination/image-europa.png",
            webp: "./assets/destination/image-europa.webp",
        },
        description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
    },
    {
        name: "Titan",
        images: {
            png: "./assets/destination/image-titan.png",
            webp: "./assets/destination/image-titan.webp",
        },
        description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
    },
];
let destination = document.querySelector(".destination");
let planetName = destination.querySelector(".destination-info h3");
let planetImg = destination.querySelector(".destination-info img");
let planetInfo = destination.querySelector(".destination-info .planet-info");
let planetDistance = destination.querySelector(".destination-info .about span");
let travelTime = destination.querySelector(
    ".destination-info .about > span:last-child"
);
let planetLinks = destination.querySelectorAll("ul li");

// add event listener to the planet links
planetLinks.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        planetLinks.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.target.classList.add("active");
        let planet = e.target.innerText;
        planet = planet[0] + planet.slice(1).toLowerCase();
        for (let i = 0, n = destinationData.length; i < n; i++) {
            if (destinationData[i].name === planet) {
                planetName.innerHTML = planet;
                planetImg.src = destinationData[i].images.png;
                planetInfo.innerHTML = destinationData[i].description;
                let head = planetDistance.firstElementChild;
                planetDistance.innerHTML = destinationData[i].distance;
                planetDistance.prepend(head);
                head = travelTime.firstElementChild;
                travelTime.innerHTML = destinationData[i].travel;
                travelTime.prepend(head);
            }
        }
    });
});

// End Destination Page
// End Functions
