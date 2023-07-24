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
// Please ignore and go to line 72
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
let planetName =
    document.querySelector(".destination .destination-info h3") || "null";
let planetImg = document.querySelector(".destination .destination-info img");
let planetInfo = document.querySelector(
    ".destination .destination-info .planet-info"
);
let planetDistance = document.querySelector(
    ".destination .destination-info .about span"
);
let travelTime = document.querySelector(
    ".destination .destination-info .about > span:last-child"
);
let planetLinks = document.querySelectorAll(".destination ul li");

// Add event listener to the planet links
planetLinks.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        // Remove active class from all links
        planetLinks.forEach((ele) => {
            ele.classList.remove("active");
        });

        // Add Active class at the clicked element
        e.target.classList.add("active");

        let planet = e.target.innerText;
        planet = planet[0] + planet.slice(1).toLowerCase();
        // Get the data where the planet name = the planet that had been clicked
        for (let i = 0, n = destinationData.length; i < n; i++) {
            if (destinationData[i].name === planet) {
                planetName.innerHTML = planet;
                planetImg.alt = destinationData[i].name + " Image";
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
// Start Crew Page

// Get Data From data.json file (didn't learn how to get it from the file in js yet)
// Please ignore and go to line 150
let crew = [
    {
        name: "Douglas Hurley",
        images: {
            png: "./assets/crew/image-douglas-hurley.png",
            webp: "./assets/crew/image-douglas-hurley.webp",
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
        name: "Mark Shuttleworth",
        images: {
            png: "./assets/crew/image-mark-shuttleworth.png",
            webp: "./assets/crew/image-mark-shuttleworth.webp",
        },
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
        name: "Victor Glover",
        images: {
            png: "./assets/crew/image-victor-glover.png",
            webp: "./assets/crew/image-victor-glover.webp",
        },
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
        name: "Anousheh Ansari",
        images: {
            png: "./assets/crew/image-anousheh-ansari.png",
            webp: "./assets/crew/image-anousheh-ansari.webp",
        },
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
];
let job = document.querySelector(".crew .detail .job");
let crewName = document.querySelector(".crew .detail h1");
let about = document.querySelector(".crew .detail p");
let dotsParent = document.querySelector(".crew .detail .dots");
let dots = document.querySelectorAll(".crew .detail .dots .dot");
let image = document.querySelector(".crew .image img");

// Add event listener to the dots
dots.forEach((dot) => {
    dot.addEventListener("click", function (e) {
        // Remove active class from all dots
        dots.forEach((dot) => dot.classList.remove("active"));

        // Add the active class to the element that had been clicked
        e.target.classList.add("active");
        let dotschild = dotsParent.children;
        for (let i = 0, n = dotschild.length; i < n; i++) {
            if (dotschild[i] === e.target) {
                job.innerHTML = crew[i].role;
                crewName.innerHTML = crew[i].name;
                about.innerHTML = crew[i].bio;
                image.src = crew[i].images.png;
                image.alt = crew[i].name;
            }
        }
    });
});
// End Crew Page
