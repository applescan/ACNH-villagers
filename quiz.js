// ----- QUESTIONS AND ANSWERS ------ //
let questions = [{
    q: "How do you like to style your hair?",
    options: [{
        score: "Peppy",
        text: "I like it tidy with lot's of accessories"
    },
    {
        score: "Normal",
        text: "Anything that' easy to take care of"
    },
    {
        score: "Snooty",
        text: "I like it to be perfectly blow dried in a hair salon"
    },
    {
        score: "Uchi",
        text: "Anything that the people around me will like!"
    },
    {
        score: "Lazy",
        text: "I forget when is the last time I bursh my hair...."
    },
    {
        score: "Cranky",
        text: "Anything short and easy because I get impatient"
    },
    {
        score: "Smug",
        text: "Full with all the best hair product of course"
    },
    {
        score: "Jock",
        text: "Simple and easy so I can get ready quickly"
    }
    ]
},
{
    q: "What do you like to do in your free time?",
    options: [{
        score: "Peppy",
        text: "Go to shopping or partying"
    },
    {
        score: "Normal",
        text: "Hanging out with friends"
    },
    {
        score: "Snooty",
        text: "Go clubbing in a VIP suite"
    },
    {
        score: "Uchi",
        text: "Taking care of my family"
    },
    {
        score: "Lazy",
        text: "Sleep"
    },
    {
        score: "Cranky",
        text: "Make sure that I got everything ready for Monday"
    },
    {
        score: "Smug",
        text: "Drive in my Mercedes"
    },
    {
        score: "Jock",
        text: "Exercise in the gym"
    }
    ]
},
{
    q: "How would you describe yourself?",
    options: [{
        score: "Peppy",
        text: "Always excited and on the go!"
    },
    {
        score: "Normal",
        text: "Just an ordinary person"
    },
    {
        score: "Snooty",
        text: "Better than you"
    },
    {
        score: "Uchi",
        text: "My family is number 1"
    },
    {
        score: "Lazy",
        text: "Very laid-back"
    },
    {
        score: "Cranky",
        text: "I would like to say I'm quite impatient"
    },
    {
        score: "Smug",
        text: "Exellent"
    },
    {
        score: "Jock",
        text: "Strong and healthy"
    }
    ]
},
{
    q: "What accessory would you want to wear?",
    options: [{
        score: "Peppy",
        text: "A flower crown"
    },
    {
        score: "Normal",
        text: "A snapback"
    },
    {
        score: "Snooty",
        text: "Big golden necklace"
    },
    {
        score: "Uchi",
        text: "A gift from my nephew"
    },
    {
        score: "Lazy",
        text: "Anything that's given to me"
    },
    {
        score: "Cranky",
        text: "I hate accessories"
    },
    {
        score: "Smug",
        text: "A pair of sunglasses"
    },
    {
        score: "Jock",
        text: "A sports jersey"
    }
    ]
},
{
    q: "What ability would you choose?",
    options: [{
        score: "Peppy",
        text: "To be able to party 24/7"
    },
    {
        score: "Normal",
        text: "To earn enough money to live"
    },
    {
        score: "Snooty",
        text: "Not to waste my time on boring people"
    },
    {
        score: "Uchi",
        text: "Be able to help everyone"
    },
    {
        score: "Lazy",
        text: "To sleep all day"
    },
    {
        score: "Cranky",
        text: "To get everything perfect"
    },
    {
        score: "Smug",
        text: "Get all the money $$$"
    },
    {
        score: "Jock",
        text: "Be the strongest person alive"
    }
    ]
}
    // add the rest of the questions here in the same format as above
];
// ------------------------------------ //


// Create a listener for clicks on the 'start the quiz' button on the front page. 
document.getElementById("beginquiz").addEventListener("click", startQuiz);

let currQuestion = 0;

// When the button is clicked the 'intro' div is hidden and the first question div is displayed
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question").style.display = "block";
    addButtonHandlers();
    updateQuestion();
}

function addButtonHandlers() {
    // Get all of the .choices elements
    const buttons = document.querySelectorAll(".choices .btn");
    // Add an onclick event listener to every element with a class of .choices
    for (const btn of buttons) {
        // When an element with .choices is clicked, run the function called buttonClicked
        btn.onclick = buttonClicked;
    }
}

// Create an object to store all the quiz answers. Each selected answer should increase the category score by 1. The highest score will be the personality 'type' in the results. 
let answerData = { // one object, with names as keys, scores as values
    Normal: 0,
    Peppy: 0,
    Snooty: 0,
    Uchi: 0,
    Lazy: 0,
    Jock: 0,
    Cranky: 0,
    Smug: 0,
};

function updateQuestion() {
    const currQuestionObj = questions[currQuestion];
    const questionDiv = document.getElementById("question");
    questionDiv.querySelector(".question-header").innerHTML = "Question " + (currQuestion + 1).toString() + ":";
    questionDiv.querySelector(".question-text").innerHTML = currQuestionObj.q;
    const choiceButtons = questionDiv.querySelector(".choices").querySelectorAll(".btn");
    choiceButtons.forEach((btn, idx) => {
        btn.setAttribute("data-score", currQuestionObj.options[idx].score);
        btn.innerHTML = currQuestionObj.options[idx].text;
    });
}

// Define what buttonClicked does
function buttonClicked(e) {
    const target = e.target; // 1. `this` is parent, need target
    console.log("target is ", target);
    // Get the current element's data-score value
    const selectedType = target.dataset.score; // 2. score is the value
    // Increase the selected answer's 'type' by 1
    console.log("selectedType is ", selectedType);
    answerData[selectedType]++; // 4. after change of structure
    currQuestion++;
    if (currQuestion === questions.length) {
        endQuiz();
        return;
    }
    updateQuestion();
}

function endQuiz() {
    console.log("Scores were ", answerData);
    document.getElementById("question").style.display = "none";
    document.getElementById("result").style.display = "block";

    // sort scores in descending order and check top 2
    const sortedScores = Object.entries(answerData).sort((type1, type2) => type2[1] - type1[1]);
    myTypes = [sortedScores[0][0]];
    if (sortedScores[1][1] === sortedScores[0][1]) myTypes.push(sortedScores[1][0]);
    let result = '';

    if (myTypes.length === 1) result = `You match with a villager that's ${myTypes[0]}, just like you!`;
    else result = `Your villager have a personality that's ${myTypes.join(' or ')}, just like you!`;
    console.log(myTypes)

    document.querySelector('#result .resultText').innerHTML = result;


    let fetchDataPersonality =
        fetch('http://acnhapi.com/v1/villagers')
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)

                let allUsers = [];

                // Populate users array
                for (let key in json) {
                    allUsers.push(json[key]);
                }

                let normal = []
                let peppy = []
                let snooty = []
                let uchi = []
                let lazy = []
                let jock = []
                let cranky = []
                let smug = []


                for (let i = 0; i < allUsers.length; i++) {

                    if (allUsers[i].personality === "Normal" && myTypes[0] === "Normal") {

                        normal.push(i); //pushing indexes of character with normal personality into an array
                        var normalRand = normal[Math.floor(Math.random() * normal.length)]; //picking random number from the normal personality

                    }

                    else if (allUsers[i].personality === "Peppy" && myTypes[0] === "Peppy") {

                        peppy.push(i);
                        var peppyRand = peppy[Math.floor(Math.random() * peppy.length)];

                    }

                    else if (allUsers[i].personality === "Snooty" && myTypes[0] === "Snooty") {

                        snooty.push(i);
                        var snootyRand = snooty[Math.floor(Math.random() * snooty.length)];

                    }

                    else if (allUsers[i].personality === "Uchi" && myTypes[0] === "Uchi") {

                        uchi.push(i);
                        var uchiRand = uchi[Math.floor(Math.random() * uchi.length)];

                    }

                    else if (allUsers[i].personality === "Lazy" && myTypes[0] === "Lazy") {

                        lazy.push(i);
                        var lazyRand = lazy[Math.floor(Math.random() * lazy.length)];

                    }

                    else if (allUsers[i].personality === "Jock" && myTypes[0] === "Jock") {

                        jock.push(i);
                        var jockRand = jock[Math.floor(Math.random() * jock.length)];

                    }

                    else if (allUsers[i].personality === "Cranky" && myTypes[0] === "Cranky") {

                        cranky.push(i);
                        var crankyRand = cranky[Math.floor(Math.random() * cranky.length)];

                    }

                    else if (allUsers[i].personality === "Smug" && myTypes[0] === "Smug") {

                        smug.push(i);
                        var smugRand = smug[Math.floor(Math.random() * smug.length)];

                    }
                }


                if (myTypes[0] === "Normal") {
                    personalityNormal(allUsers[normalRand].name['name-EUen'], allUsers[normalRand].personality, allUsers[normalRand].saying, allUsers[normalRand]['image_uri'],
                        allUsers[normalRand].gender, allUsers[normalRand].species, allUsers[normalRand]['birthday-string'])
                }
                else if (myTypes[0] === "Peppy") {
                    personalityPeppy(allUsers[peppyRand].name['name-EUen'], allUsers[peppyRand].personality, allUsers[peppyRand].saying, allUsers[peppyRand]['image_uri'],
                        allUsers[peppyRand].gender, allUsers[peppyRand].species, allUsers[peppyRand]['birthday-string'])
                }
                else if (myTypes[0] === "Snooty") {
                    personalitySnooty(allUsers[snootyRand].name['name-EUen'], allUsers[snootyRand].personality, allUsers[snootyRand].saying, allUsers[snootyRand]['image_uri'],
                        allUsers[snootyRand].gender, allUsers[snootyRand].species, allUsers[snootyRand]['birthday-string'])
                }
                else if (myTypes[0] === "Uchi") {
                    personalityUchi(allUsers[uchiRand].name['name-EUen'], allUsers[uchiRand].personality, allUsers[uchiRand].saying, allUsers[uchiRand]['image_uri'],
                        allUsers[uchiRand].gender, allUsers[uchiRand].species, allUsers[uchiRand]['birthday-string'])
                }
                else if (myTypes[0] === "Lazy") {
                    personalityLazy(allUsers[lazyRand].name['name-EUen'], allUsers[lazyRand].personality, allUsers[lazyRand].saying, allUsers[lazyRand]['image_uri'],
                        allUsers[lazyRand].gender, allUsers[lazyRand].species, allUsers[lazyRand]['birthday-string'])
                }
                else if (myTypes[0] === "Jock") {
                    personalityJock(allUsers[jockRand].name['name-EUen'], allUsers[jockRand].personality, allUsers[jockRand].saying, allUsers[jockRand]['image_uri'],
                        allUsers[jockRand].gender, allUsers[jockRand].species, allUsers[jockRand]['birthday-string'])
                }
                else if (myTypes[0] === "Cranky") {
                    personalityCranky(allUsers[crankyRand].name['name-EUen'], allUsers[crankyRand].personality, allUsers[crankyRand].saying, allUsers[crankyRand]['image_uri'],
                        allUsers[crankyRand].gender, allUsers[crankyRand].species, allUsers[crankyRand]['birthday-string'])
                }
                else if (myTypes[0] === "Smug") {
                    personalitySmug(allUsers[smugRand].name['name-EUen'], allUsers[smugRand].personality, allUsers[smugRand].saying, allUsers[smugRand]['image_uri'],
                        allUsers[smugRand].gender, allUsers[smugRand].species, allUsers[smugRand]['birthday-string'])
                }
            })
}

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

