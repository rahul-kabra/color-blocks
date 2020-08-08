var staticClueDataLength = 0;
var staticClueData = "";
var stopEraseTimer;

const data = [
    {
        type: "CHARACTER",
        associations: "26,27",
        clue: "Video game characters.",
        label: "Mario and Luigi",
        answer: "mario and luigi"
    },
    {
        type: "CARTOON",
        associations: "10,11,12",
        clue: "3 superpowered sisters.",
        label: "Powerpuff Girls",
        answer: "powerpuff girls"
    },
    {
        type: "SHOW",
        associations: "1,2,3,4,5",
        clue: "5 superhero students.",
        label: "Power Rangers",
        answer: "power rangers"
    },
    {
        type: "CARTOON",
        associations: "24,25",
        clue: "Fictional species collection.",
        label: "Pokemon",
        answer: "pokemon"
    },
    {
        type: "CHARACTER",
        associations: "13,14,15,16",
        clue: "Quartet humanoid turtles.",
        label: "Ninja Turtles",
        answer: "ninja turtles"
    },
    {
        type: "CHARACTER",
        associations: "18,19,20",
        clue: "Matoka Banana!",
        label: "Minions",
        answer: "minions"
    },
    {
        type: "SHOW",
        associations: "6,7,8,9",
        clue: "Musical joyride.",
        label: "Teletubbies",
        answer: "teletubbies"
    },
    {
        type: "CARTOON",
        associations: "29,30",
        clue: "Boy genius.",
        label: "Dexter's Laboratory",
        answer: "dexter's laboratory"
    },
    {
        type: "SHOW",
        associations: "31,32,33,34,35",
        clue: "Satirical American family.",
        label: "The Simpsons",
        answer: "the simpsons"
    },
    {
        type: "CHARACTER",
        associations: "17",
        clue: "Merc with a Mouth.",
        label: "Deadpool",
        answer: "deadpool"
    },
    {
        type: "SHOW",
        associations: "36,37",
        clue: "The truth is out there.",
        label: "X-Files",
        answer: "x-files"
    },
    {
        type: "CHARACTER",
        associations: "39,40",
        clue: "Disney darlings.",
        label: "Mickie and Minnie",
        answer: "mickie and minnie"
    },
    {
        type: "MOVIE",
        associations: "43,44",
        clue: "Toys coming to life.",
        label: "Toy Story",
        answer: "toy story"
    },
    {
        type: "CHARACTER",
        associations: "41,42",
        clue: "Young Belgian adventurer.",
        label: "Tintin",
        answer: "tintin"
    },
    {
        type: "SHOW",
        associations: "45,46,47,48",
        clue: "Stone Age family.",
        label: "The Flintstones",
        answer: "the flintstones"
    },
    {
        type: "MOVIE",
        associations: "49,50,51,52,53,54",
        clue: "May the force be with you.",
        label: "Star Wars",
        answer: "star wars"
    },
    {
        type: "CARTOON",
        associations: "59,60,61,62,63",
        clue: "Where are you!",
        label: "Scooby Doo",
        answer: "scooby doo"
    },
    {
        type: "CHARACTER",
        associations: "78,79,23,80",
        clue: "Yellow-furred honey lover.",
        label: "Winnie the Pooh",
        answer: "winnie the pooh"
    },
    {
        type: "CARTOON",
        associations: "64,65",
        clue: "Forever favourite.",
        label: "Tom and Jerry",
        answer: "tom and jerry"
    },
    {
        type: "MOVIE",
        associations: "66,67,68",
        clue: "Squeaky voiced singers.",
        label: "Alvin and the Chipmunks",
        answer: "alvin and the chipmunks"
    },
    {
        type: "CARTOON",
        associations: "69,70,71,72,73",
        clue: "Teen superheroes.",
        label: "Teen Titans",
        answer: "teen titans"
    },
    {
        type: "MOVIE",
        associations: "74,75,76,77",
        clue: "Ogre adventures.",
        label: "Shrek",
        answer: "shrek"
    },
    {
        type: "MOVIE",
        associations: "55,56,57,58",
        clue: "Starship enterprise.",
        label: "Star Trek",
        answer: "star trek"
    },
    {
        type: "MOVIE",
        associations: "81,82",
        clue: "Intergalactic romance.",
        label: "Wall-E",
        answer: "wall-e"
    },
    {
        type: "CARTOON",
        associations: "83,84,85",
        clue: "Cook at Krusty Krab.",
        label: "SpongeBob SquarePants",
        answer: "spongebob squarepants"
    }
]

function showClue(e) {
    let number = (e.id).split("_")[1];
    eraseEffect(number);
}

function revealClue(num) {
    typewriterEffect(num);
}

function type(num) {
    let clueEl = document.getElementById('data-' + num);
    let clueData = data[(num - 1)].clue;
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
    let dataArray = data[(num - 1)].clue.split("");
    for (let i = 0; i < dataArray.length; i++) {
        setTimeout(function () {
            result += dataArray[i];
            document.getElementById('data-' + num).innerHTML = result;
        }, 50 * i);
    }
}

function onAnswerSubmit() {
    let answer = document.getElementById("input-data").value.toLowerCase();
    data.filter(function (e) {
        if (e.answer === answer) {
            let id = data.indexOf(e) + 1;
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

function setupBoard() {
    for (let i = 1; i <= data.length; i++) {
        let blockContainerElement = document.createElement("div");
        blockContainerElement.className = "color-block-container";

        let questionElement = document.createElement("div");
        questionElement.className = "question";

        let questionNumberElement = document.createElement("label");
        questionNumberElement.className = "question-number";
        questionNumberElement.innerText = i < 10 ? "0" + i : i;

        let questionTypeElement = document.createElement("label");
        questionTypeElement.className = "question-type";
        questionTypeElement.innerText = data[(i - 1)].type;

        let questionClueLabelElement = document.createElement("label");
        questionClueLabelElement.id = "question-clue-label_" + i;
        questionClueLabelElement.className = "question-clue";
        questionClueLabelElement.innerText = "💡";
        questionClueLabelElement.onclick = function () {
            showClue(this);
        }

        questionElement.appendChild(questionNumberElement);
        questionElement.appendChild(questionTypeElement);
        questionElement.appendChild(questionClueLabelElement);

        let colorBlockElement = document.createElement("div");
        colorBlockElement.className = "color-block";

        let associationsArray = data[(i - 1)].associations.split(",");

        for (let j = 0; j < associationsArray.length; j++) {
            let barElement = document.createElement("span");
            barElement.className = "bar";
            barElement.id = "bar-" + associationsArray[j];

            colorBlockElement.appendChild(barElement);
        }

        let clueContainerElement = document.createElement("div");
        clueContainerElement.className = "clue-container";

        let clueCardElement = document.createElement("div");
        clueCardElement.className = "clue-card";

        let clueCardContentElement = document.createElement("div");
        clueCardContentElement.className = "clue-card-content";

        let clueLabelElement = document.createElement("label");
        clueLabelElement.id = "clue-" + i;
        clueLabelElement.innerText = data[(i - 1)].label;

        clueCardContentElement.appendChild(clueLabelElement);

        let clueDivElement = document.createElement("div");
        clueDivElement.id = "clue-div_" + i;
        clueDivElement.className = "clue-card-reveal clue-card-reveal-up";

        let dataElement = document.createElement("label");
        dataElement.id = "data-" + i;
        dataElement.innerText = "Click 💡 to reveal clue.";

        clueDivElement.appendChild(dataElement);

        clueCardElement.appendChild(clueCardContentElement);
        clueCardElement.appendChild(clueDivElement);

        clueContainerElement.appendChild(clueCardElement);

        blockContainerElement.appendChild(questionElement);
        blockContainerElement.appendChild(colorBlockElement);
        blockContainerElement.appendChild(clueContainerElement);

        document.getElementById("container").appendChild(blockContainerElement);
    }
}

setupBoard();