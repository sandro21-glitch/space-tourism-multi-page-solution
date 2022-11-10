
const hamburger = document.getElementById('hamburger');
const hamburgerClose = document.getElementById('hamburgerClose');
const nav = document.getElementById('nav');
const moon = document.getElementById('moon');
const mars = document.getElementById('mars');
const europa = document.getElementById('europa');
const titan = document.getElementById('titan');
const planet = document.querySelector('.planet-name');
const planetPara = document.querySelector('.planet-para');
const distance = document.querySelector('.distance');
const years = document.querySelector('.years');
const planetImg = document.querySelector('#planetImg');
const unlisted = document.querySelectorAll('.a')

const crewRole = document.getElementById('crew__role');
const crewName = document.getElementById('crew__name');
const crewDescription = document.getElementById('crew__description');
const crewImg = document.querySelector('.crew-image');
const allCircle = document.querySelectorAll('.circles');
const circle1 = document.querySelector('.circle-1');
const circle2 = document.querySelector('.circle-2');
const circle3 = document.querySelector('.circle-3');
const circle4 = document.querySelector('.circle-4');

//Tech
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const techTitle = document.getElementById('technology__title');
const techDescription = document.getElementById('technology__description');
const techImage = document.querySelector('.image');




// Mobile Nav Activate
hamburger.addEventListener('click', () => {
    hamburger.classList.add('hidden');
    hamburgerClose.classList.remove('hidden')
    nav.classList.add('active');
});
hamburgerClose.addEventListener('click', () => {
    hamburger.classList.remove('hidden');
    hamburgerClose.classList.add('hidden')
    nav.classList.remove('active');
});


if (unlisted.length) {
    unlisted.forEach((link) => {
      link.addEventListener('click', (e) => {
        unlisted.forEach((link) => {
            link.classList.remove('active');
        });
        e.preventDefault();
        link.classList.add('active');
      });
    });
}



if (allCircle.length) {
    allCircle.forEach((circle) => {
      circle.addEventListener('click', (e) => {
        allCircle.forEach((circl) => {
            circl.classList.remove('active');
        });
        e.preventDefault();
        circle.classList.add('active');
      });
    });
}


//Technology nav
const Tech = document.querySelectorAll('.technology__nav > div');
if(Tech.length){
    Tech.forEach((nav) => {
            nav.addEventListener('click', (e) => {
                Tech.forEach((nav) => {
                    nav.classList.remove('active');
                })
                e.preventDefault();
                nav.classList.add('active');
            })
        })
}



catchData(techData)
function techData(data) {
    one.addEventListener('click', () => {
        techTitle.innerHTML = data.technology[0].name;
        techDescription.innerHTML = data.technology[0].description;
        techImage.src = '/assets/technology/image-launch-vehicle-portrait.jpg'
    });
   
    two.addEventListener('click', () => {
        techTitle.innerHTML = data.technology[1].name;
        techDescription.innerHTML = data.technology[1].description;
        techImage.src = '/assets/technology/image-spaceport-portrait.jpg'
    });
   
    three.addEventListener('click', () => {
        techTitle.innerHTML = data.technology[2].name;
        techDescription.innerHTML = data.technology[2].description;
        techImage.src = '/assets/technology/image-space-capsule-portrait.jpg'
    });
   

}




function catchData(dataa) {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => dataa(data))
    .catch(err => console.log(''))
}

// Crew
catchData(crewInfo)
function crewInfo(data) {
    circle1.addEventListener('click', () => {
        crewRole.innerHTML = data.crew[0].name;
        crewName.innerHTML = data.crew[0].role;
        crewDescription.innerHTML = data.crew[0].bio;
        crewImg.src = data.crew[0].images.png;
    });
    circle2.addEventListener('click', () => {
        crewRole.innerHTML = data.crew[1].name;
        crewName.innerHTML = data.crew[1].role;
        crewDescription.innerHTML = data.crew[1].bio;
        crewImg.src = data.crew[1].images.png;
    });
    circle3.addEventListener('click', () => {
        crewRole.innerHTML = data.crew[2].name;
        crewName.innerHTML = data.crew[2].role;
        crewDescription.innerHTML = data.crew[2].bio;
        crewImg.src = data.crew[2].images.png;
    });
    circle4.addEventListener('click', () => {
        crewRole.innerHTML = data.crew[3].name;
        crewName.innerHTML = data.crew[3].role;
        crewDescription.innerHTML = data.crew[3].bio;
        crewImg.src = data.crew[3].images.png;
    });
}


//Planets
catchData(planetsInfo)
function planetsInfo(data){
    moon.addEventListener('click', () => {
        planet.innerHTML = data.destinations[0].name;
        planetPara.innerHTML = data.destinations[0].description;
        distance.innerHTML = data.destinations[0].distance;
        years.innerHTML = data.destinations[0].travel;
        planetImg.src = "/assets/destination/image-moon.png";
    })
    mars.addEventListener('click', () => {
        planet.innerHTML = data.destinations[1].name;
        planetPara.innerHTML = data.destinations[1].description;
        distance.innerHTML = data.destinations[1].distance;
        years.innerHTML = data.destinations[1].travel;
        planetImg.src = "/assets/destination/image-mars.png";
    })
    europa.addEventListener('click', () => {
        planet.innerHTML = data.destinations[2].name;
        planetPara.innerHTML = data.destinations[2].description;
        distance.innerHTML = data.destinations[2].distance;
        years.innerHTML = data.destinations[2].travel;
        planetImg.src = "/assets/destination/image-europa.png";
    })
    titan.addEventListener('click', () => {
        planet.innerHTML = data.destinations[3].name;
        planetPara.innerHTML = data.destinations[3].description;
        distance.innerHTML = data.destinations[3].distance;
        years.innerHTML = data.destinations[3].travel;
        planetImg.src = "/assets/destination/image-titan.png";
    })
}





