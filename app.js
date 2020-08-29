let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
let action = '';

const userScore_span = document.querySelector('#userScore');
const compScore_span = document.querySelector('#compScore');
const result_p = document.querySelector('#result');

const PapelButton_img = document.querySelector('#paperButton');
const rockButton_img = document.querySelector('#rockButton');
const scissorsButton_img = document.querySelector('#scissorsButton');



jogadasPossiveis = ['pedra', 'papel', 'tesoura'];


function jogo(cliqueDoUsuario) {
    let jogada = 0;


    n = Math.floor(Math.random() * 3);
    cliqueDoComputador = jogadasPossiveis[n];

    PapelButton_img.className = "";
    rockButton_img.className = "";
    scissorsButton_img.className = "";

    switch (cliqueDoUsuario + cliqueDoComputador) {

        case 'Papelpapel':
            // window(string(cliqueDoUsuario) + 'Button_img').classList.add('gray-glow');
            PapelButton_img.classList.add('gray-glow');
            action = 'empata';
            pontuacaoComputador++;
            pontuacaoUsuario++;
            break;
        case 'Pedrapedra':
            rockButton_img.classList.add('gray-glow');
            action = 'empata';
            pontuacaoComputador++;
            pontuacaoUsuario++;
            break;
        case 'Tesouratesoura':
            scissorsButton_img.classList.add('gray-glow');
            action = 'empata';
            pontuacaoComputador++;
            pontuacaoUsuario++;
            break;


        case 'Papeltesoura':
            PapelButton_img.classList.add('red-glow');
            action = 'perde';
            pontuacaoComputador++;
            break;
        case 'Pedrapapel':
            rockButton_img.classList.add('red-glow');
            action = 'perde';
            pontuacaoComputador++;
            break;
        case 'Tesourapedra':
            scissorsButton_img.classList.add('red-glow');
            action = 'perde';
            pontuacaoComputador++;
            break;
        case 'Papelpedra':
            PapelButton_img.classList.add('green-glow');
            action = 'ganha';
            pontuacaoUsuario++;
            break;
        case 'Pedratesoura':
            rockButton_img.classList.add('green-glow');
            action = 'ganha';
            pontuacaoUsuario++;
            break;
        case 'Tesourapapel':
            scissorsButton_img.classList.add('green-glow');
            action = 'ganha';
            pontuacaoUsuario++;
            break;

    }

    result.innerText = cliqueDoUsuario + ' ' + action + ' de ' + cliqueDoComputador;
    userScore_span.innerText = pontuacaoUsuario;
    compScore_span.innerText = pontuacaoComputador;

}

function principal() {

    PapelButton_img.addEventListener("click", () => jogo('Papel'));
    rockButton_img.addEventListener("click", () => jogo('Pedra'));
    scissorsButton_img.addEventListener("click", () => jogo('Tesoura'));

}


function resetar() {
    resetButton.addEventListener("click", () => {

            pontuacaoUsuario = 0;
            pontuacaoComputador = 0;

            PapelButton_img.className = "";
            rockButton_img.className = "";
            scissorsButton_img.className = "";

            userScore_span.innerText = pontuacaoUsuario;
            compScore_span.innerText = pontuacaoComputador;
        }

    )
}
resetar();

principal();