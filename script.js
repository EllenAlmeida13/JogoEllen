/*function pulaLinha() {

    document.write("<br>");
    document.write("<br>");
}
function mostra(frase) {
    document.write(frase);
}*/

var perguntaAtual = 0;
var respostaSelecionada = null;
var perguntas = [

    { /* Pergunta número 1 */
        pergunta:"De que são constituídos os diamantes?",
        resposta: ["Grafite","Rênio","Carbono","Ósmio","Bóhrio"],
        respostaCorreta: 2,
        /*selecionada: -1*/
    },

    { /* Pergunta número 2 */
        pergunta:"Qual dessas aves não voam?",
        resposta: ["Pinguim","Galinha","Cegonha","Pato","Peru"],
        respostaCorreta: 0,
        /*selecionada: -1*/
    },

    { /* Pergunta número 3 */
        pergunta:"Qual é respectivamente o animal terrestre mais lento e o mais veloz?",
        resposta: ["Bicho-preguiça e guepardo","Tartaruga e leão","Coala e cavalo","Caracol e tubarão","Bicho-preguiça e libélula"],
        respostaCorreta: 0,
        /*selecionada: -1*/
    },

    { /* Pergunta número 4 */
        pergunta:"Qual destas, apesar do seu nome, não é considerada um tipo de força?",
        resposta: ["Força de atrito","Força peso","Força centrípeta","Força eletromotriz","Força normal"],
        respostaCorreta: 3,
        /*selecionada: -1*/
    },

    { /* Pergunta número 5 */
        pergunta:"Listras azuis e brancas intercaladas e um sol no canto superior esquerdo caracterizam a bandeira de qual país da América do Sul?",
        resposta: ["Argentina","Brasil","Uruguai","Namíbia","Japão"],
        respostaCorreta: 2,
        /*selecionada: -1*/
    },
    
]



function mostrarPergunta() {
    var listaPergunta = document.getElementById("pergunta");
    var listaResposta = document.getElementById("respostas");

    var perguntaAtualObj = perguntas[perguntaAtual];

    listaPergunta.innerHTML = perguntaAtualObj.pergunta;
    listaResposta.innerHTML = "";

    for (var i = 0; i < perguntaAtualObj.resposta.length; i++) {
        var resposta = document.createElement("li");
        resposta.textContent = perguntaAtualObj.resposta[i];
        resposta.addEventListener("click", criarCallback(i));
        listaResposta.appendChild(resposta);
    }
}

function criarCallback(index) {
    return function() {
        selecionarResposta(index);
    };
}


function selecionarResposta(index) {
    respostaSelecionada = index;
    var respostas = document.querySelectorAll("#respostas li");
    respostas.forEach((resposta, i) => {
        if (i === index) {
            resposta.classList.add("selecionada");
        } else {
            resposta.classList.remove("selecionada");
        }
    });
}

function verificarResposta() {
    var resultadoDiv = document.getElementById("resultado");

    if (respostaSelecionada !== null) {
        var perguntaAtualObj = perguntas[perguntaAtual];
        if (respostaSelecionada === perguntaAtualObj.respostaCorreta) {
            resultadoDiv.textContent = "Resposta correta!";
            perguntaAtual++;
            respostaSelecionada = null;
        } else {
            resultadoDiv.textContent = "Resposta incorreta. Tente novamente.";
        }

        console.log(respostaSelecionada);

        /*perguntaAtual++;
        respostaSelecionada = null;*/

        if (perguntaAtual < perguntas.length) {
            mostrarPergunta();
        } else {
            resultadoDiv.textContent = "Fim do jogo!";
            var botaoVerificar = document.querySelector("button");
            botaoVerificar.disabled = true;
        }
    } else {
        resultadoDiv.textContent = "Selecione uma alternativa antes de verificar.";
    }
}

mostrarPergunta();


/*if (resultadoDiv >= 5){
    mostra("Parabéns, você acertou todas")
}

if (resultadoDiv >= 1 && resultado <5){
    mostra("Parabéns, você acertou todas")
}

if (resultadoDiv <= 5){
    mostra("Não foi dessa vez, tente novamente, você consegue!")
}*/

/*var mostrarPerguntaIndex = 0;
var respostaCorreta = 0;

var quizDiv = document.getElementById("quiz");
var enviarBtn = document.getElementById("enviar");
var voltarBtn = document.getElementById("voltar");
var resultadoDiv = document.getElementById("resultado");
var resultadoTexto = document.getElementById("resultadoTexto");

function mostrarPergunta() {
    var listaPergunta = perguntas[mostrarPerguntaIndex];
    var listaOpcao = listaPergunta.opcao.map((opcao, index) =>
        `<li onclick="checarResposta(${index})">${opcao}</li>`
    ).join("");

    quizDiv.innerHTML = `
        <div class="geral-${mostrarPerguntaIndex + 1}">
        <h4>${listaPergunta.pergunta}</h4>
        <ol type="a">${listaOpcao}</ol>
        </div>
    `;
}

function selecionarResposta(selecionarOpcao) {
    var perguntaAtual = perguntas[mostrarPerguntaIndex];
    perguntaAtual.selecionada = selecionarOpcao;
}

function mostrarResultado() {
    resultadoTexto.textContent = `Você acertou ${respostaCorreta} de ${perguntas.length} questões.`;
    resultadoDiv.style.display = "block";
}

function enviarRespostas() {
    for (var i = 0; i < perguntas.length; i++) {
        if (perguntas[i].selecionada === perguntas[i].respostaCorreta) {
            respostaCorreta++;
        }
    }
    mostrarResultado();
}

enviarBtn.addEventListener("click", enviarRespostas);
voltarBtn.addEventListener("click", () => {
    resultadoDiv.style.display = "none";
    mostrarPerguntaIndex = 0;
    respostaCorreta = 0;
    mostrarPergunta();
});

mostrarPergunta();*/