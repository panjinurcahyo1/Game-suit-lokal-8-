let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p")
const gajah_div = document.getElementById("g");
const manusia_div = document.getElementById("m");
const semut_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['g', 'm', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "g") return "Gajah";
    if (letter === "m") return "Manusia";
    if (letter === "s") return "Semut";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    //result_p.innerHTML = convertToWord (userChoice) + " mengalahkan " + convertToWord (computerChoice) + " Kamu menang!";
    result_p.innerHTML = `${convertToWord (userChoice)} VS ${convertToWord (computerChoice)}. Kamu menang!`;
    
} 

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    //result_p.innerHTML = convertToWord (userChoice) + " dikalahkan " + convertToWord (computerChoice) + " Kamu kalah!";
    result_p.innerHTML = `${convertToWord (userChoice)} VS ${convertToWord (computerChoice)}. Kamu kalah!`;
} 

function draw(userChoice, computerChoice) {
    //result_p.innerHTML = convertToWord (userChoice) + " seri " + convertToWord (computerChoice) + " Kamu seri!";
    result_p.innerHTML = `${convertToWord (userChoice)} VS ${convertToWord (computerChoice)}. Kamu seri!`;
} 


function game(userChoice) {
    const computerChoice = getComputerChoice();
    result_p.textContent = "Komputer memilih..";

    // Setelah jeda waktu, komputer akan memilih dan hasil akan ditampilkan
    setTimeout(() => {
        switch (userChoice + computerChoice) {
            case "gm":
            case "ms":
            case "sg":
                win(userChoice, computerChoice);
                break;
            case "gs":
            case "mg":
            case "sm":
                lose(userChoice, computerChoice);
                break;
            case "gg":
            case "mm":
            case "ss":
                draw(userChoice, computerChoice);
                break;
        }
    }, 1000); // Ganti angka 1000 dengan jumlah milidetik jeda yang diinginkan (misalnya, 1000 milidetik = 1 detik)
}


function main () {
gajah_div.addEventListener('click', () => game("g"));
manusia_div.addEventListener('click', () => game("m"));
semut_div.addEventListener('click', () => game("s"));
}

main ();