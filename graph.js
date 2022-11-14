var personalityArr = []
var hobbyArr = []
var genderArr = []

let fetchDataPersonality =
    fetch('https://acnhapi.com/v1/villagers')
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

            let education = []
            let fashion = []
            let fitness = []
            let music = []
            let nature = []
            let play = []

            let male = []
            let female = []

            for (let i = 0; i < allUsers.length; i++) {

                if (allUsers[i].personality === "Normal") {

                    normal.push(i); //pushing indexes of character with normal personality into an array
                }

                else if (allUsers[i].personality === "Peppy") {

                    peppy.push(i);

                }

                else if (allUsers[i].personality === "Snooty") {

                    snooty.push(i);

                }

                else if (allUsers[i].personality === "Uchi") {

                    uchi.push(i);

                }

                else if (allUsers[i].personality === "Lazy") {

                    lazy.push(i);

                }

                else if (allUsers[i].personality === "Jock") {

                    jock.push(i);

                }

                else if (allUsers[i].personality === "Cranky") {

                    cranky.push(i);

                }

                else if (allUsers[i].personality === "Smug") {

                    smug.push(i);

                }
            }

            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].hobby === "Education") {

                    education.push(i);

                }
                else if (allUsers[i].hobby === "Fashion") {

                    fashion.push(i);

                }
                else if (allUsers[i].hobby === "Fitness") {

                    fitness.push(i);

                }
                else if (allUsers[i].hobby === "Music") {

                    music.push(i);

                }
                else if (allUsers[i].hobby === "Nature") {

                    nature.push(i);

                }
                else if (allUsers[i].hobby === "Play") {

                    play.push(i);

                }
            }

            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].gender === "Male") {

                    male.push(i);

                }
                else if (allUsers[i].gender === "Female") {

                    female.push(i);

                }
            }


            let arr1 = normal.length
            let arr2 = peppy.length
            let arr3 = snooty.length
            let arr4 = uchi.length
            let arr5 = lazy.length
            let arr6 = jock.length
            let arr7 = cranky.length
            let arr8 = smug.length
            personalityArr.push(arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8)
            console.log(personalityArr)

            let arr9 = education.length
            let arr10 = fashion.length
            let arr11 = fitness.length
            let arr12 = music.length
            let arr13 = nature.length
            let arr14 = play.length
            hobbyArr.push(arr9, arr10, arr11, arr12, arr13, arr14)
            console.log(hobbyArr)

            let arr15 = male.length
            let arr16 = female.length
            genderArr.push(arr15, arr16)
            console.log(genderArr)
        })

const abc = document.getElementById('myChart');
const myChart = new Chart(abc, {
    type: 'bar',
    data: {
        labels: ['Normal', 'Peppy', 'Snooty', 'Uchi', 'Lazy', 'Jock', 'Cranky', 'Smug'],
        datasets: [{
            label: "Number of Villagers",
            data: [59, 49, 55, 24, 60, 55, 55, 34],
            backgroundColor: [
                '#70B7F7',
                '#F28B73',
                '#9478C2',
                '#FFF09C',
                '#B1F4FA',
                '#A6D740',
                '#FBAF4F',
                '#DBB3F9',

            ],
            borderColor: [
                '#70B7F7',
                '#F28B73',
                '#9478C2',
                '#FFF09C',
                '#B1F4FA',
                '#A6D740',
                '#FBAF4F',
                '#DBB3F9',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const dfg = document.getElementById('myChart2');
const myChart2 = new Chart(dfg, {
    type: 'doughnut',
    data: {
        labels: ['Education', 'Fashion', 'Fitness', 'Music', 'Nature', 'Play'],
        datasets: [{
            label: "User's choice",
            data: [64, 66, 66, 64, 66, 65],
            backgroundColor: [
                '#70B7F7',
                '#927BBC',
                '#A6D740',
                '#EF8C77',
                '#FFF09B',
                '#FBAF4E',
            ],
            borderColor: [
                '#70B7F7',
                '#927BBC',
                '#A6D740',
                '#EF8C77',
                '#FFF09B',
                '#FBAF4E',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const hij = document.getElementById('myChart3');
const myChart3 = new Chart(hij, {
    type: 'pie',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: "User's choice",
            data: [204, 187],
            backgroundColor: [
                '#71B6F7',
                '#FCACC7',
            ],
            borderColor: [
                '#71B6F7',
                '#FCACC7',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});