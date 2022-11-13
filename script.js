var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

let fetchData =
    fetch('http://acnhapi.com/v1/villagers')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

            var allUsers = [];

            // Populate users array
            for (var key in json) {
                allUsers.push(json[key]);
            }
            console.log(allUsers)

            for (let i = allUsers.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allUsers[i], allUsers[j]] = [allUsers[j], allUsers[i]];

                {
                    addCard(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                        allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                }
            }
        })

function addCard(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
            Gender: ${gender}
            Birthday:  ${bday}
            Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row').appendChild(template);
}


let fetchDataGender =
    fetch('http://acnhapi.com/v1/villagers')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

            var allUsers = [];

            // Populate users array
            for (var key in json) {
                allUsers.push(json[key]);
            }
            console.log(allUsers)

            for (let i = 0; i < allUsers.length; i++) {


                if (allUsers[i].gender === "Male") {
                    {
                        genderMale(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }

                if (allUsers[i].gender === "Female") {
                    {
                        genderFemale(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }

            }
        })


function genderMale(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-genderMale").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
    Gender: ${gender}
    Birthday:  ${bday}
    Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-genderMale').appendChild(template);
}

function genderFemale(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-genderFemale").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
    Gender: ${gender}
    Birthday:  ${bday}
    Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-genderFemale').appendChild(template);
}



let fetchDataPersonality =
    fetch('http://acnhapi.com/v1/villagers')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)

            var allUsers = [];

            // Populate users array
            for (var key in json) {
                allUsers.push(json[key]);
            }
            console.log(allUsers)

            for (let i = 0; i < allUsers.length; i++) {

                if (allUsers[i].personality === "Normal") {
                    {
                        personalityNormal(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }

                if (allUsers[i].personality === "Peppy") {
                    {
                        personalityPeppy(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }

                if (allUsers[i].personality === "Snooty") {
                    {
                        personalitySnooty(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }

                if (allUsers[i].personality === "Uchi") {
                    {
                        personalityUchi(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }

                if (allUsers[i].personality === "Lazy") {
                    {
                        personalityLazy(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }


                if (allUsers[i].personality === "Jock") {
                    {
                        personalityJock(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }

                if (allUsers[i].personality === "Cranky") {
                    {
                        personalityCranky(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }

                if (allUsers[i].personality === "Smug") {
                    {
                        personalitySmug(allUsers[i].name['name-EUen'], allUsers[i].personality, allUsers[i].saying, allUsers[i]['image_uri'],
                            allUsers[i].gender, allUsers[i].species, allUsers[i]['birthday-string'])
                    }
                }
            }
        })

function personalityNormal(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-personalityNormal").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
            Gender: ${gender}
            Birthday:  ${bday}
            Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-personalityNormal').appendChild(template);
}

function personalityPeppy(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-personalityPeppy").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
            Gender: ${gender}
            Birthday:  ${bday}
            Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-personalityPeppy').appendChild(template);
}


function personalitySnooty(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-personalitySnooty").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
            Gender: ${gender}
            Birthday:  ${bday}
            Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-personalitySnooty').appendChild(template);
}

function personalityUchi(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-personalityUchi").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
            Gender: ${gender}
            Birthday:  ${bday}
            Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-personalityUchi').appendChild(template);
}

function personalityLazy(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-personalityLazy").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
            Gender: ${gender}
            Birthday:  ${bday}
            Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-personalityLazy').appendChild(template);
}


function personalityJock(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-personalityJock").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
            Gender: ${gender}
            Birthday:  ${bday}
            Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-personalityJock').appendChild(template);
}

function personalityCranky(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-personalityCranky").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
            Gender: ${gender}
            Birthday:  ${bday}
            Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-personalityCranky').appendChild(template);
}

function personalitySmug(name, personality, saying, url, gender, species, bday) {
    const template = document.getElementById("card-template-personalitySmug").content.cloneNode(true);
    template.querySelector('.card-title').innerText = name;
    template.querySelector('.card-text').innerText = `"${saying}"`
    template.querySelector('.card-p').innerText =
        `Personality: ${personality}
            Gender: ${gender}
            Birthday:  ${bday}
            Species:  ${species}`;
    template.querySelector('.card-img-top').src = url;
    document.querySelector('#main-row-personalitySmug').appendChild(template);
}


