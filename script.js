let order = [];
let clickedOrder = [];
let score = 0;

//0 - vermelho
//1 - laranja
//2 - amarelo
//3 - verde
//4 - ciano
//5 - azul
//6 - roxo
//7 - rosa
//8 - rosaescuro

const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const cyan = document.querySelector('.cyan');
const blue = document.querySelector('.blue');
const purple = document.querySelector('.yellow');
const pink = document.querySelector('.pink');
const darkpink = document.querySelector('.darkpink');

//cria ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 9);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return red;
    } else if(color == 1) {
        return orange;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return green;
    } else if (color == 4) {
        return cyan;
    } else if (color == 5) {
        return blue;
    } else if (color == 6) {
        return purple;
    } else if (color == 7) {
        return pink;
    } else if (color == 8) {
        return darkpink;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis nove cores! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
red.onclick = () => click(0);
orange.onclick = () => click(1);
yellow.onclick = () => click(2);
green.onclick = () => click(3);
cyan.onclick = () => click(4);
blue.onclick = () => click(5);
purple.onclick = () => click(6);
pink.onclick = () => click(7);
darkpink.onclick = () => click(8);

//inicio do jogo
playGame();