// JavaScript source code

let playerChoice = document.getElementById('PLAplay');

let cpuChoice = document.getElementById('CPUplay');

const playerPoint = document.getElementById('playerScorepoint')

const cpuPoint = document.getElementById('cpuScorepoint')

let plScore = 1;

let cpuScore = 1;

const chooseRock = () => {

    playerChoice.src = "icons/PLArock.png";

    playerChoice.width = 180;

    playerChoice.height = 180;

    console.log("Rock");

    let checkWin = cpuBehaviour();

    if (checkWin === "Rock" ){
        playerPoint.innerHTML = playerPoint.innerHTML;
        cpuPoint.innerHTML = cpuPoint.innerHTML;
    }
    else if (checkWin === "Scissors"){
        playerPoint.innerHTML = plScore;
        plScore++;
    }
    else{
        cpuPoint.innerHTML = cpuScore;
        cpuScore++;
    }

};

const choosePaper = () => {

    playerChoice.src = "icons/PLApaper.png";

    playerChoice.width = 180;

    playerChoice.height = 180;

    console.log("Paper");

    let checkWin = cpuBehaviour();

    if (checkWin === "Rock"){
        playerPoint.innerHTML = plScore;
        plScore++;
    }
    else if (checkWin === "Paper"){
        playerPoint.innerHTML = playerPoint.innerHTML;
        cpuPoint.innerHTML = cpuPoint.innerHTML;
    }
    else{
        cpuPoint.innerHTML = cpuScore;
        cpuScore++;
    }

};

const chooseScissors = () => {

    playerChoice.src = "icons/PLAscissors.png";

    playerChoice.width = 180;

    playerChoice.height = 180;

    console.log("Scissors");

    let checkWin = cpuBehaviour();

    if (checkWin === "Rock"){
        cpuPoint.innerHTML = cpuScore;
        cpuScore++;
    }
    else if(checkWin === "Scissors"){
        playerPoint.innerHTML = playerPoint.innerHTML;
        cpuPoint.innerHTML = cpuPoint.innerHTML;
    }
    else {
        playerPoint.innerHTML = plScore;
        plScore++;
    }

};

const cpuBehaviour = (minValue = 1, maxValue = 12) => {

    minValue = Math.ceil(minValue);

    maxValue = Math.floor(maxValue);

    let choiceResult = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

    if (choiceResult >= 1 && choiceResult <= 4) {

        cpuChoice.src = "icons/CPUrock.png";

        cpuChoice.width = 180;

        cpuChoice.height = 180;

        return "Rock";

    }

    else if (choiceResult >= 5 && choiceResult <= 8) {

        cpuChoice.src = "icons/CPUpaper.png";

        cpuChoice.width = 180;

        cpuChoice.height = 180;

        return "Paper";

    }

    else if (choiceResult >= 9 && choiceResult <= 12) {

        cpuChoice.src = "icons/CPUScissors.png";

        cpuChoice.width = 180;

        cpuChoice.height = 180;

        return "Scissors";

    }

};
