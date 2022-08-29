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
for(let i = 0; i < boxes.length; i++){
 
    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function(){

        let el = checkEl(player1, player2);

        // verifica se ja possui x ou o

        if(this.childNodes.length == 0){

            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computar jogada

            if(player1 == player2){
            player1++;
            } else {
            player2++;
            }

            // Checar quem 
            checkWinCondition();


        }
    });
    

}

function checkEl(player1, player2){
    let el;
    if (player1 == player2){
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;
}

// Quem ganhou
function checkWinCondition(){
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
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let check1 = b1.childNodes[0].className;
        let check2 = b2.childNodes[0].className;
        let check3 = b3.childNodes[0].className;

        if(check1 == 'x' && check2 == 'x' && check3 == 'x'){
            // x
            console.log('x venceu');
        }
        else if(check1 == 'o' && check2 == 'o' && check4 == 'o'){
            // o
            console.log('o venceu');
        }
    }
    
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let check1 = b4.childNodes[0].className;
        let check2 = b5.childNodes[0].className;
        let check3 = b6.childNodes[0].className;

        if(check1 == 'x' && check2 == 'x' && check3 == 'x'){
            // x
            console.log('x venceu');
        }
        else if(check1 == 'o' && check2 == 'o' && check3 == 'o'){
            // o
            console.log('o venceu');
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let check1 = b7.childNodes[0].className;
        let check2 = b8.childNodes[0].className;
        let check3 = b9.childNodes[0].className;

        if(check1 == 'x' && check2 == 'x' && check3 == 'x'){
            // x
            console.log('x venceu');
        }
        else if(check1 == 'o' && check2 == 'o' && check3 == 'o'){
            // o
            console.log('o venceu');
        }
    }

    // Vertical

    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let check1 = b1.childNodes[0].className;
        let check2 = b4.childNodes[0].className;
        let check3 = b7.childNodes[0].className;

        if(check1 == 'x' && check2 == 'x' && check3 == 'x'){
            // x
            console.log('x venceu');
        }
        else if(check1 == 'o' && check2 == 'o' && check3 == 'o'){
            // o
            console.log('o venceu');
        }
    }


    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let check1 = b2.childNodes[0].className;
        let check2 = b5.childNodes[0].className;
        let check3 = b8.childNodes[0].className;

        if(check1 == 'x' && check2 == 'x' && check3 == 'x'){
            // x
            console.log('x venceu');
        }
        else if(check1 == 'o' && check2 == 'o' && check3 == 'o'){
            // o
            console.log('o venceu');
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let check1 = b3.childNodes[0].className;
        let check2 = b6.childNodes[0].className;
        let check3 = b9.childNodes[0].className;

        if(check1 == 'x' && check2 == 'x' && check3 == 'x'){
            // x
            console.log('x venceu');
        }
        else if(check1 == 'o' && check2 == 'o' && check3 == 'o'){
            // o
            console.log('o venceu');
        }
    }

    // Diagonal

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let check1 = b1.childNodes[0].className;
        let check2 = b5.childNodes[0].className;
        let check3 = b9.childNodes[0].className;

        if(check1 == 'x' && check2 == 'x' && check3 == 'x'){
            // x
            console.log('x venceu');
        }
        else if(check1 == 'o' && check2 == 'o' && check3 == 'o'){
            // o
            console.log('o venceu');
        }
    }    

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let check1 = b3.childNodes[0].className;
        let check2 = b5.childNodes[0].className;
        let check3 = b7.childNodes[0].className;

        if(check1 == 'x' && check2 == 'x' && check3 == 'x'){
            // x
            console.log('x venceu');
        }
        else if(check1 == 'o' && check2 == 'o' && check3 == 'o'){
            // o
            console.log('o venceu');
        }
    }

    //Velha

    let counter = 0;

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    } 

    if( counter == 9){
        console.log('deu velha');
    }
}