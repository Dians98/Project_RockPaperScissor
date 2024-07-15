const buttons = document.querySelectorAll('.button');
const choosen = document.querySelector('.choosen');
let allChoice = ["Rock", "Paper", "Scissor"];
let userScore = 0;
let cpuScore = 0;

function playRound(humanChoice, computerChoice) {
    displayChoice(getUserChoice(humanChoice), getComputerChoice(computerChoice));

    whoWin(getUserChoice(humanChoice), getComputerChoice(computerChoice));


}

function getComputerChoice(index) {
    return allChoice[index];
}

function getUserChoice(index) {
    return allChoice[index];
}

function incrementUserScore() {
    userScore++;
    let userS = document.getElementById('userScore');
    userS.textContent = userScore;
    return true;
}

function incrementCpuScore() {
    cpuScore++;
    let cpuS = document.getElementById('cpuScore');
    cpuS.textContent = cpuScore;
    return true;
}

function displayChoice(user, cpu) {
    var userChoice = document.getElementById("userChoice");
    userChoice.textContent = user;
    var cpuChoice = document.getElementById("cpuChoice");
    cpuChoice.textContent = cpu;
}

function displayResult(txt) {
    let choosen = document.getElementById('choosen');
    choosen.textContent = txt;
}

function displayWinner(txt) {
    let choosen = document.getElementById('choosen');
    let clickModalBtn = document.getElementById('clickModalBtn');
    choosen.textContent = txt;

    let modal_body = document.getElementById('modal-body');
    modal_body.textContent = txt;
    clickModalBtn.click();

}

function restartGame() {
    location.reload();
}

function quitGame() {
    window.close();
}


function whoWin(user, cpu) {

    if (user == cpu) {
        txt = "Game Tied ! "

    }
    else if ((user == "Rock" && cpu == "Scissor") || (user == "Paper" && cpu == "Rock") || (user == "Scissor" && cpu == "Paper")) {
        

        txt = "You won !";
        incrementUserScore();
        console.log("User score : " + userScore);
    }

    else {
        txt = "You loose !";
        incrementCpuScore();
        console.log("Cpu score : " + cpuScore);
    }


    /**
     * CHECK IF SOMEONE WON !
     */
    if (userScore == 5) {
        displayWinner("You won the party !");
        userScore = 0;
        cpuScore = 0;
    }
    else if (cpuScore == 5) {
        displayWinner("You loose the party !");
        userScore = 0;
        cpuScore = 0;
    }
    else {
        displayResult(txt)
    }


    return true;
}





/**
 * INTERACTION AVEC LES BOUTONS
 */

// Parcourez chaque bouton et ajoutez un écouteur d'événements pour 'mouseover'
buttons.forEach(function (button) {
    const image = button.querySelector('img');
    button.addEventListener('mouseover', function (event) {
        // Affichez l'attribut 'alt' de l'image dans la console
        choosen.textContent = image.alt;

    });

    button.addEventListener('mouseleave', function (event) {
        // Affichez l'attribut 'alt' de l'image dans la console
        choosen.textContent = "Make your choice !";

    });

    button.addEventListener('click', function (event) {
        //Generer un nombre au hasard entre 0 à 3 pour le cpu
        let random = Math.floor(Math.random() * 3);

        /**
         * button.value : attribut value sur html
         * random : le nombre hasard généré
         */
        playRound(button.value, random);
    });
});