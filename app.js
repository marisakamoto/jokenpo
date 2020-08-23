let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
let action = '';

const userScore_span = document.querySelector('#userScore');
const compScore_span = document.querySelector('#compScore');
const result_p = document.querySelector('#result');

const paperButton_img = document.querySelector('#paperButton');
const rockButton_img = document.querySelector('#rockButton');
const scissorsButton_img = document.querySelector('#scissorsButton');



jogadasPossiveis = ['pedra', 'papel', 'tesoura'];


function jogo(cliqueDoUsuario) {

    console.log(cliqueDoUsuario);
    n = Math.floor(Math.random() * 3);
    cliqueDoComputador = jogadasPossiveis[n];
    paperButton_img.classList.remove('green-glow');
    paperButton_img.classList.remove('red-glow');
    paperButton_img.classList.remove('gray-glow');

    rockButton_img.classList.remove('green-glow');
    rockButton_img.classList.remove('red-glow');
    rockButton_img.classList.remove('gray-glow');

    scissorsButton_img.classList.remove('green-glow');
    scissorsButton_img.classList.remove('red-glow');
    scissorsButton_img.classList.remove('gray-glow');

    switch (cliqueDoUsuario + cliqueDoComputador) {

        case 'papelpapel':
            paperButton_img.classList.add('gray-glow');
            action = 'empata';
            pontuacaoComputador = pontuacaoComputador + 1;
            pontuacaoUsuario = pontuacaoUsuario + 1;
            break;
        case 'pedrapedra':
            rockButton_img.classList.add('gray-glow');
            action = 'empata';
            pontuacaoComputador = pontuacaoComputador + 1;
            pontuacaoUsuario = pontuacaoUsuario + 1;
            break;
        case 'tesouratesoura':
            scissorsButton_img.classList.add('gray-glow');
            action = 'empata';
            pontuacaoComputador = pontuacaoComputador + 1;
            pontuacaoUsuario = pontuacaoUsuario + 1;
            break;


        case 'papeltesoura':
            paperButton_img.classList.add('red-glow');
            action = 'perde';
            pontuacaoComputador = pontuacaoComputador + 1;
            break;
        case 'pedrapapel':
            rockButton_img.classList.add('red-glow');
            action = 'perde';
            pontuacaoComputador = pontuacaoComputador + 1;
            break;
        case 'tesourapedra':
            scissorsButton_img.classList.add('red-glow');
            action = 'perde';
            pontuacaoComputador = pontuacaoComputador + 1;
            break;
        case 'papelpedra':
            paperButton_img.classList.add('green-glow');
            action = 'ganha';
            pontuacaoUsuario = pontuacaoUsuario + 1;
            break;
        case 'pedratesoura':
            rockButton_img.classList.add('green-glow');
            action = 'ganha';
            pontuacaoUsuario = pontuacaoUsuario + 1;
            break;
        case 'tesourapapel':
            scissorsButton_img.classList.add('green-glow');
            action = 'ganha';
            pontuacaoUsuario = pontuacaoUsuario + 1;
            break;

    }
    document.querySelector('#result').innerText = cliqueDoUsuario + ' ' + action + ' de ' + cliqueDoComputador;
    document.querySelector('#userScore').innerText = pontuacaoUsuario;
    document.querySelector('#compScore').innerText = pontuacaoComputador;

}

function principal() {

    paperButton_img.addEventListener("click", () => jogo('papel'));
    rockButton_img.addEventListener("click", () => jogo('pedra'));
    scissorsButton_img.addEventListener("click", () => jogo('tesoura'));



}
principal();