//  Function to get data from the .json file
function getData() {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        // can be onreadystatechange also
        request.onload = function () {
            if (request.readyState === 4 && request.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject(Error("No Data Found"));
            }
        };

        request.open("GET", "./data.json");
        request.send();
    });
}

getData()
    .then((data) => {
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

        // Get Data From data.json file
        let destinationData = data.destinations;

        let planetName = document.querySelector(
            ".destination .destination-info h3"
        );
        let planetImg = document.querySelector(
            ".destination .destination-info img"
        );
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
                        break;
                    }
                }
            });
        });

        // End Destination Page
        // Start Crew Page

        // Get Data From data.json file
        let crew = data.crew;

        let job = document.querySelector(".crew .detail .job");
        let crewName = document.querySelector(".crew .detail h1");
        let about = document.querySelector(".crew .detail p");
        let dots = document.querySelectorAll(".crew .detail .dots .dot");
        let image = document.querySelector(".crew .image img");

        // Add event listener to the dots
        dots.forEach((dot) => {
            dot.addEventListener("click", function (e) {
                // Remove active class from all dots
                dots.forEach((dot) => dot.classList.remove("active"));

                // Add the active class to the element that had been clicked
                e.target.classList.add("active");
                index = e.target.getAttribute("data-id");

                // To maje sure the uesr did't change the attribute data-id from the inspect
                if (index < crew.length) {
                    job.innerHTML = crew[index].role;
                    crewName.innerHTML = crew[index].name;
                    about.innerHTML = crew[index].bio;
                    image.src = crew[index].images.png;
                    image.alt = crew[index].name;
                }
            });
        });
        // End Crew Page

        // Start Technology Page

        // Get Data From data.json file
        let technology = data.technology;
        let list = document.querySelectorAll(
            ".technologies .technology .nums .num"
        );
        let technoHead = document.querySelector(
            ".technologies .technology .about h1"
        );
        let Para = document.querySelector(
            ".technologies .technology .about p:last-of-type"
        );
        let technoImage = document.querySelectorAll(
            ".technologies picture > *"
        );

        list.forEach((ele) => {
            ele.addEventListener("click", function (e) {
                list.forEach((ele) => {
                    ele.classList.remove("active");
                });
                e.target.classList.add("active");
                let index = e.target.innerHTML - 1;
                technoHead.innerHTML = technology[index].name;
                Para.innerHTML = technology[index].description;
                technoImage[0].srcset = technology[index].images.landscape;
                technoImage[1].srcset = technology[index].images.portrait;
                technoImage[2].src = technology[index].images.portrait;
                technoImage[2].alt = technology[index].name;
            });
        });
        // End Technology Page
    })
    .catch((rej) => console.log(rej))
    .finally(console.log("The Operation Is Done"));
