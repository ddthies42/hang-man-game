var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
var country = ["america", "russia", "vietnam", "mexico", "china", "india", "australia", "bangladesh",
    "cambodia", "poland"];
var sport = ["badminton", "soccer", "football", "baseball", "tennis", "swimming", "skateboarding",
    "basketball", "bowling", "boxing"];
var hangman = [
    {from: [70, 38], to: [72, 46]},
    {from: [70, 38], to: [68, 46]},
    {from: [70, 45], to: [72, 55]},
    {from: [70, 45], to: [68, 55]},
    {from: [70, 35], to: [70, 45]},
    {circle: [70, 30], radius: 2},
    {from: [70, 5], to: [70, 25]},
    {from: [30, 5], to: [70, 5]},
    {from: [30, 95], to: [30, 5]},
    {from: [1, 95], to: [99, 95]}
];
var category = ['country', 'sport'];
var answer = "";
let opportunity = 5;
let guesses = []; //store the guesses answerArray
var s;
var count = 0;

// Random word generator
function countries() {
    answer = country[Math.floor(Math.random() * document.getElementById("maxNum").value)];
}
// Random word generator
function sports() {
    answer = sport[Math.floor(Math.random() * document.getElementById("maxNum").value)];
}

function randomWordToGuess() {
    for (var i = 0; i < answer.length; i++) {
        guesses[i] = "_";
    }
    s = guesses.join(" ");
    document.getElementById("answer").innerHTML = s;
}

// Play button: call category function and randomWordToGuess()
function submitButtonClicked() {
    if (document.getElementById("rdCountry").checked) {
        document.getElementById("categoryName").innerHTML = "The selected category is Country";
        countries();
        randomWordToGuess();

    }
    else if (document.getElementById("rdSport").checked) {
        document.getElementById("categoryName").innerHTML = "The selected category is Sport";
        sports();
        randomWordToGuess();

    }
}

var text = "";

function letter() {
    var letter = document.getElementById("letter").value;
    if (letter.length > 0) {
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] === letter) {
                guesses[i] = letter;
            } else {
                drawHangman();
            }
        }
        if (letter === answer.toString()) {
            alert("You Win! Congratulations!!!!");
        } else if (letter.length > 1 && letter.length !== answer.length) {
            alert('Please enter a word that has the same length with the answer!');
        } else if (letter.length === answer.length && letter !== answer.toString()) {
            alert('Game Over! The correct answer is ' + answer);
            document.getElementById("letter").style.display = "none";
            document.getElementById("guessBtn").style.display = "none";
        }
        count++;

        document.getElementById("counter").innerHTML = "You have " + Math.floor(5 - count) + " guesses left";
        document.getElementById("answer").innerHTML = guesses.join(" ");

        text += letter + ",";
        document.getElementById("guessedLetter").innerHTML = "Guessed letters: " + text;

    }
    if (count === 4) {
        document.getElementById("stat").innerHTML = "You only have 1 opportunity left! Please guess the word now or you will lose!";
    }
    if (count === 5) {
        alert('Game Over! The correct answer is ' + answer);
        document.getElementById("letter").style.display = "none";
        document.getElementById("guessBtn").style.display = "none";
    }

}

function resetButton() {
    document.getElementById("myForm").reset();
}

var guessesLeft;

function drawHangman() {
    guessesLeft--;
    let p = hangman[guessesLeft];
    let lines = document.querySelector('.hangman').querySelectorAll('svg');
    for (var i = 0; i < lines.length; i++) {
        lines[i].children[0].classList.remove('draw');
    }
}

function playAgain() {
    //guesses = [];
    //text = "";
    //count = 0;
    document.getElementById("myForm").reset();
    document.getElementById("output").reset();
    //submitButtonClicked();
    //letter();
}

function checkProgress() {
    var progress = 0;
    for (count = 0; count <= 5; count++) {
        progress += 20;
    }
    /*if (count = 1) {
        progress += 20;
    }
    if (count = 2) {
        progress += 20;
    }
    if (count = 3) {
        progress += 20;
    }
    if (count = 4) {
        progress += 20;
    }
    if (count = 5) {
        progress += 20;
    }
    document.getElementById("progress").value = progress;*/
}




