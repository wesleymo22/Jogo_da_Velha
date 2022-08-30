let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2);

        // verifica se ja possui x ou o

        if (this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computar jogada

            if (player1 == player2) {
                player1++;

                if (secondPlayer == 'ai-player') {
                    // função executar jogada
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }

            // Checar quem venceu
            checkWinCondition();


        }
    });


}

// 2 players ou IA

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute("id");

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(function () {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500)
    });
}


function checkEl(player1, player2) {
    let el;
    if (player1 == player2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;
}

// Quem ganhou
function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //Horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let check1 = b1.childNodes[0].className;
        let check2 = b2.childNodes[0].className;
        let check3 = b3.childNodes[0].className;

        if (check1 == 'x' && check2 == 'x' && check3 == 'x') {
            // x
            declararWinner('x');
        }
        else if (check1 == 'o' && check2 == 'o' && check3 == 'o') {
            // o
            declararWinner('o');
        }
    }

    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let check1 = b4.childNodes[0].className;
        let check2 = b5.childNodes[0].className;
        let check3 = b6.childNodes[0].className;

        if (check1 == 'x' && check2 == 'x' && check3 == 'x') {
            // x
            declararWinner('x');
        }
        else if (check1 == 'o' && check2 == 'o' && check3 == 'o') {
            // o
            declararWinner('o');
        }
    }

    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let check1 = b7.childNodes[0].className;
        let check2 = b8.childNodes[0].className;
        let check3 = b9.childNodes[0].className;

        if (check1 == 'x' && check2 == 'x' && check3 == 'x') {
            // x
            declararWinner('x');
        }
        else if (check1 == 'o' && check2 == 'o' && check3 == 'o') {
            // o
            declararWinner('o');
        }
    }

    // Vertical

    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let check1 = b1.childNodes[0].className;
        let check2 = b4.childNodes[0].className;
        let check3 = b7.childNodes[0].className;

        if (check1 == 'x' && check2 == 'x' && check3 == 'x') {
            // x
            declararWinner('x');
        }
        else if (check1 == 'o' && check2 == 'o' && check3 == 'o') {
            // o
            declararWinner('o');
        }
    }


    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let check1 = b2.childNodes[0].className;
        let check2 = b5.childNodes[0].className;
        let check3 = b8.childNodes[0].className;

        if (check1 == 'x' && check2 == 'x' && check3 == 'x') {
            // x
            declararWinner('x');
        }
        else if (check1 == 'o' && check2 == 'o' && check3 == 'o') {
            // o
            declararWinner('o');
        }
    }

    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let check1 = b3.childNodes[0].className;
        let check2 = b6.childNodes[0].className;
        let check3 = b9.childNodes[0].className;

        if (check1 == 'x' && check2 == 'x' && check3 == 'x') {
            // x
            declararWinner('x');
        }
        else if (check1 == 'o' && check2 == 'o' && check3 == 'o') {
            // o
            declararWinner('o');
        }
    }

    // Diagonal

    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let check1 = b1.childNodes[0].className;
        let check2 = b5.childNodes[0].className;
        let check3 = b9.childNodes[0].className;

        if (check1 == 'x' && check2 == 'x' && check3 == 'x') {
            // x
            declararWinner('x');
        }
        else if (check1 == 'o' && check2 == 'o' && check3 == 'o') {
            // o
            declararWinner('o');
        }
    }

    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let check1 = b3.childNodes[0].className;
        let check2 = b5.childNodes[0].className;
        let check3 = b7.childNodes[0].className;

        if (check1 == 'x' && check2 == 'x' && check3 == 'x') {
            // x
            declararWinner('x');
        }
        else if (check1 == 'o' && check2 == 'o' && check3 == 'o') {
            // o
            declararWinner('o');
        }
    }

    //Velha

    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if (counter == 9) {
        declararWinner('deu velha');
    }

    // Limpa o jogo, declara o vencedor e atualiza o placar

    function declararWinner(winner) {
        let scoreboardX = document.querySelector("#scoreboard-1");
        let scoreboardY = document.querySelector("#scoreboard-2");
        let msg = "";

        if (winner == 'x') {
            scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
            msg = "O jogador 1 ganhou";
        } else if (winner == 'o') {
            scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
            msg = "O jogador 2 ganhou";
        } else {
            msg = "Deu velha";
        }

        //exibe msg
        messageText.innerHTML = msg;
        messageContainer.classList.remove("hide");


        //esconde msg
        setTimeout(function () {
            messageContainer.classList.add("hide");
        }, 3000);

        // zerar jogadas
        player1 = 0;
        player2 = 0;

        //remove x e o
        let boxesToRemove = document.querySelectorAll(".box div");

        for (let i = 0; i < boxesToRemove.length; i++) {
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }
    }
}

// Executar Jogada CPU
function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        // só vou preencher se estiver vazio
        if (boxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        //Checagem se esta preenchido
        } else {
            filled++;
        }
    }

    if (counter == 0 && filled < 9) {
        computerPlay();
    }
}