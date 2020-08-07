var staticClueDataLength = 0;
var staticClueData = "";
var stopEraseTimer;

function showClue(e) {
    let number = (e.id).split("_")[1];
    eraseEffect(number);
}

function revealClue(num) {
    typewriterEffect(num);
}

function type(num) {
    let clueEl = document.getElementById('data-' + num);
    let clueData = data[(num - 1)];
    let clueLength = clueData.length;
    clueEl.innerHTML = (clueData.substr(0, clueLength++));
    setTimeout(function () {
        type(num);
    }, 150);
}

function eraseEffect(num) {
    let clueEl = document.getElementById('data-' + num);
    staticClueData = clueEl.innerHTML;
    staticClueDataLength = staticClueData.length;
    erase(num);
}

function erase(num) {
    let clueEl = document.getElementById('data-' + num);
    clueEl.innerHTML = (staticClueData.substr(0, staticClueDataLength--));
    stopEraseTimer = setTimeout(function () {
        erase(num);
    }, 50);
    if (clueEl.innerText === "") {
        clearTimeout(stopEraseTimer);
        setTimeout(function () {
            revealClue(num);
        }, 500);
    }
}

function typewriterEffect(num) {
    let result = "";
    let dataArray = clues[(num - 1)].split("");
    for (let i = 0; i < dataArray.length; i++) {
        setTimeout(function () {
            result += dataArray[i];
            document.getElementById('data-' + num).innerHTML = result;
        }, 50 * i);
    }
}

function onAnswerSubmit() {
    let answer = document.getElementById("input-data").value.toLowerCase();
    answers.filter(function (e) {
        if (e === answer) {
            let id = answers.indexOf(answer) + 1;
            document.getElementById("clue-div_" + id).style.transform = "translateY(-100%)";
        }
    });
    document.getElementById("input-data").value = "";

}

function checkVal() {
    if (document.getElementById('input-data').value !== '') {
        document.getElementById("answer").disabled = false;
        document.getElementById("answer").classList.remove("disabled");
    }
    else {
        document.getElementById("answer").disabled = true;
        document.getElementById("answer").classList.add("disabled");
    }
}

window.addEventListener("load", checkVal);

const clues = [
    "Video game characters.",
    "3 superpowered sisters.",
    "5 superhero students.",
    "Fictional species collection.",
    "Quartet humanoid turtles.",
    "Matoka Banana!",
    "Musical joyride.",
    "Boy genius.",
    "Satirical American family.",
    "Merc with a Mouth.",
    "The truth is out there.",
    "Disney darlings.",
    "Toys coming to life.",
    "Young Belgian adventurer.",
    "Stone Age family.",
    "May the force be with you.",
    "Where are you!",
    "Yellow-furred honey lover.",
    "Forever favourite.",
    "Squeaky voiced singers.",
    "Teen superheroes.",
    "Ogre adventures.",
    "Starship enterprise.",
    "Intergalactic romance.",
    "Cook at Krusty Krab."
];

const answers = [
    "mario and luigi",
    "powerpuff girls",
    "power rangers",
    "pokemon",
    "ninja turtles",
    "minions",
    "teletubbies",
    "dexter's laboratory",
    "the simpsons",
    "deadpool",
    "x-files",
    "mickie and minnie",
    "toy story",
    "tintin",
    "the flintstones",
    "star wars",
    "scooby doo",
    "winnie the pooh",
    "tom and jerry",
    "alvin and the chipmunks",
    "teen titans",
    "shrek",
    "star trek",
    "wall-e",
    "spongebob squarepants"
];