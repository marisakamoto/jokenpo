// let meuNome = 'Mariana'
// let sobreNome = 'Sakamoto'
// let textoResultado_p = document.querySelector("#result").innerText
//     /* <p id="result">Pedra (user) ganha de Tesoura (comp) </p> */
// let textoResultado_p = document.getElementById("userScore")


let pontuacaoUsuario = 10;
let pontuacaoComputador = 50;

const userScore_span = document.querySelector('#userScore');
const compScore_span = document.querySelector('#compScore');
const result_p = document.querySelector('#result');

const paperButton_img = document.querySelector('#paperButton');
const rockButton_img = document.querySelector('#rockButton');
const scissorsButton_img = document.querySelector('#scissorsButton');

document.querySelector('#userScore').innerText = pontuacaoUsuario;
document.querySelector('#compScore').innerText = pontuacaoComputador;

jogadasPossiveis = ['rock', 'paper', 'scissors'];


function jogo(cliqueDoUsuario) {

    console.log(cliqueDoUsuario);
    n = Math.floor(Math.random() * 3);
    cliqueDoComputador = jogadasPossiveis[n];

    switch (cliqueDoUsuario + cliqueDoComputador) {
        case cliqueDoUsuario:
            ganhador = Empate;
            break;

        case

    }

}

function principal() {
    paperButton_img.addEventListener("click", () => jogo('paperButton'));
    rockButton_img.addEventListener("click", () => jogo('rockButton'));
    scissorsButton_img.addEventListener("click", () => jogo('scissorsButton'));

}
principal();
switch (ganhador) {
    case 'comp':
        console.log('Máquina venceu');
        break;
    case 'user':
        console.log('Humano venceu');
        break;
    default:
        console.log('Empate técnico');
}


let fruta = 'Papaya';
switch (fruta) {
    case 'Laranja':
        console.log('Laranjaaaaa!');
        break;
    default:
        console.log('Não há ' + fruta + ' hoje');
}