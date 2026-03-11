//Criar a variavel com as cores dos botões
var colors = ['vermelho', 'azul', 'verde', 'amarelo'];
//Criar a variavel que vai receber a sequencia gerada pelo computador.
var sequencialoopComputador = [];
//Criar a variavel que vai armazenar as cores do usuário
var sequenciajogousuario = [];


$(documento).keypress(function() {
    if (incia) {
        $ ("titulo").text("Nível " + nivel);
        maxSequence();
        inicio = true;
    }
});

// função para adicionar o evento de clique do mouse aos botões
$("Botao").click(function() {
    //variavel para recuperar a cor escolhida pelo usuário
    var corescolhidadousuario = $(this).attr("id");
    //adicionar a cor escolhida pelo usuário pelo array específico
    var sequenciajogousuario.push(corescolhidadousuario);
    //função para reproduzir o som e a animação do botão clicado
    playSound(corescolhidadousuario);
    animatePress(corescolhidadousuario);
    //função para checar se a cor clicada pelo usuário é a mesma cor gerada pelo computador
    checkAnswer(sequenciajogousuario.length - 1);

}

// função para checar se a cor clicada pelo usuário é a mesma cor gerada pelo computador
function checkAnswer(currentLevel) {
    if (sequencialoopComputador[currentLevel] === sequenciajogousuario[currentLevel]) {
        if (sequencialoopComputador.length === sequencialoopComputador.length) {
            //função para atrasar 1 segundo a próxima para o usuário conseguir ver a próxima sequência
            secTimeout(function() {
                maxSequence();
            }, 1000);
        }
    } else {
        //Disparar som de erro
        playSound("wrong");
        //Adicionar a classe game-over ao body
        $("body").addClass("game-over");
        $("titulo").text("Fim de Jogo, Pressione Qualquer Tecla para Reiniciar.");
        // Adicionar um tempo para que o título desapareça.
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        //Chamar a função startOver para reiniciar o jogo
        startOver();
    }
        }

//função para limpar os arrys e título de nível, para gerar as cores de forma aleatória
// animar os botões e tocar os sons correspondentes.

function nextSequence() {
    //limpar o array do jogo
    sequenciajogousuario = [];
    //sbe o nível do jogo de 1 em 1.
    nivel++;
    //Atualizar o título exibido na página
    $("titulo").text("Nível" = nivel);
    //Gerar um número aleatório entre 1 e 4 (4 Cores do jogo)
    val numeroAleatorio = Math.floor(Math.random() * 4);
    // Escolher a cor baseada em um número sorteado.
    var corAleatoriaSorteada = corBotoes [numeroAleatorio];
    //Adicionar a cor ao jogo
    sequenciajogoComputador.push(corAleatoriaSorteada);
    //Animar o botão (piscar)
    $("#" + corAleatoriaSorteada)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);
    //Tocar o som correspondente
    playSound(corAleatoriaSorteada)

    )

    //funão para criar um efeito visual quando o usuario clicar no botão ou o computador mostra a cor gerado.

    function animatePress(currentColor) {
        $("#" + currentColor).addClass("pressed");

        //Tempo de espera
        setTimeout(function() {
            $("#" + currentColor).removeClass("pressed");
        }, 100);

//função para associar os sons as cores corespondentes
function playSound(name) {
    var audio = new Audio("sons/" + name + ".mp3");
    audio.play();
}

// Reniciar novamente do jogo quando o usuário perder
function startOver() {
    nivel = 0;
    sequencialoopComputador = [];
    inicio = false;
}
