// Array de exemplos de esboços
const quickDrawDataset = ["Gato", "Cachorro", "Árvore", "Carro", "Casa", "Estrela", "Flor", "Bicicleta"];

// Elementos DOM
const sketchSpan = document.getElementById("esboço_desenhado");
const yourSketch = document.getElementById("meu_esboço");
const sketchAccuracy = document.getElementById("precisao");
const scoreSpan = document.getElementById("pontuacao");
const timeSpan = document.getElementById("tempo");

let randomNumber;
let sketch;
let timerCounter = 0;
let timerCheck = "";
let drawSketch = "";
let answerHolder = "";
let score = 0;

// Função para atualizar o esboço aleatório
function updateSketch() {
    randomNumber = Math.floor(Math.random() * quickDrawDataset.length);
    sketch = quickDrawDataset[randomNumber];
    sketchSpan.textContent = "Esboço a Ser Desenhado: " + sketch;
    yourSketch.textContent = "Seu Esboço: ";
    sketchAccuracy.textContent = "Precisão: ";
}

// Inicializa o esboço
updateSketch();

// Função para submeter
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
    clearInterval(timerInterval);

    const guessedSketch = prompt("Qual esboço você desenhou?");

    if (guessedSketch.toLowerCase() === sketch.toLowerCase()) {
        answerHolder = "Correto!";
        score++;
    } else {
        answerHolder = "Incorreto!";
    }

    drawSketch = "Esboço desenhado: " + guessedSketch;
    yourSketch.textContent = drawSketch;
    sketchAccuracy.textContent = "Precisão: " + answerHolder;
    scoreSpan.textContent = "Pontuação: " + score;
    timeSpan.textContent = "Tempo: Fim";
});

// Atualiza o timer
function updateTimer() {
    timerCounter++;
    timeSpan.textContent = "Tempo: " + timerCounter + " segundos";
}

// Inicializa o timer
let timerInterval = setInterval(updateTimer, 1000);
