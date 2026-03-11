// Detectando clique do mouse nos botões da bateria.

// Laço que percorre todos os botões da bateria.

// Adicionar um evento a cada botão para o evento de "click".
    
// Detectar o pressionamento de teclas no teclado.

// Função que toca o som correspondente a uma tecla (pesquisar sobre o case).

// Função que anima o botão que foi pressionado ou clicado.

// Detectando clique do mouse nos botões da bateria.

var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {

    drumButtons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML.toLowerCase();

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();

    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});

function makeSound(key) {
    switch (key) {
        case "a":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "s":
            var tom1 = new Audio("./sounds/tom1.mp3");
            tom1.play();
            break;

        case "d":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "g":
            var kick = new Audio("./sounds/kickbass.mp3");
            kick.play();
            break;

        case "j":
            var tom3 = new Audio("./sounds/tom3.mp3");
            tom3.play();
            break;

        case "k":
            var tom2 = new Audio("./sounds/tom2.mp3");
            tom2.play();
            break;

        case "l":
            var crash2 = new Audio("./sounds/crash.mp3");
            crash2.play();
            break;

        default:
            console.log("Tecla não mapeada:", key);
            break;
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);

    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
