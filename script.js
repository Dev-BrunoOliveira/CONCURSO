const materiaSelect = document.getElementById("materiaSelect");
const iniciarBtn = document.getElementById("iniciarBtn");
const quizContainer = document.getElementById("quizContainer");
const questaoContainer = document.getElementById("questaoContainer");
const materiaTitulo = document.getElementById("materiaTitulo");
const proximaBtn = document.getElementById("proximaBtn");
const resultadoContainer = document.getElementById("resultadoContainer");
const resultadoTexto = document.getElementById("resultadoTexto");
const reiniciarBtn = document.getElementById("reiniciarBtn");
const modalExplicacao = document.getElementById("modalExplicacao");
const explicacaoTexto = document.getElementById("explicacaoTexto");
const progressoContainer = document.getElementById("progressoContainer");
const progressoBarra = document.getElementById("progressoBarra");

const btnVoltar = document.getElementById("btnVoltar");
const btnIrParaInicio = document.getElementById("btnIrParaInicio");
const botaoProsseguir = document.getElementById("botaoProsseguir");

const navBotoes = document.getElementById("navBotoes");
const botoesNavegacaoInferior = document.getElementById(
  "botoesNavegacaoInferior"
);

let materiaAtual = "";
let questaoIndex = 0;
let acertos = 0;
let questoesDaMateria = [];

iniciarBtn.addEventListener("click", iniciarQuiz);
reiniciarBtn.addEventListener("click", reiniciarQuiz);

if (btnVoltar) {
  btnVoltar.addEventListener("click", questaoAnterior);
}
if (proximaBtn) {
  proximaBtn.addEventListener("click", proximaQuestao);
}
if (botaoProsseguir) {
  botaoProsseguir.addEventListener("click", proximaQuestao);
}
if (btnIrParaInicio) {
  btnIrParaInicio.addEventListener("click", voltarParaSelecao);
}

function iniciarQuiz() {
  materiaAtual = materiaSelect.value;
  if (!materiaAtual) {
    alert("Selecione uma matéria primeiro!");
    return;
  }

  questaoIndex = 0;
  acertos = 0;
  questoesDaMateria = [...questoes[materiaAtual]];

  document.querySelector("header").classList.add("hidden");
  resultadoContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  if (navBotoes) {
    navBotoes.classList.remove("hidden");
  }
  if (botoesNavegacaoInferior) {
    botoesNavegacaoInferior.classList.remove("hidden");
  }
  if (progressoContainer) {
    progressoContainer.classList.add("hidden");
  }

  materiaTitulo.textContent = `Matéria: ${materiaAtual
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())}`;

  mostrarQuestao();
  atualizarProgresso();
}

function voltarParaSelecao() {
  quizContainer.classList.add("hidden");
  document.querySelector("header").classList.remove("hidden");

  if (navBotoes) {
    navBotoes.classList.add("hidden");
  }
  if (botoesNavegacaoInferior) {
    botoesNavegacaoInferior.classList.add("hidden");
  }
  if (progressoContainer) {
    progressoContainer.classList.add("hidden");
  }

  materiaSelect.value = "";
}

function mostrarQuestao() {
  if (botoesNavegacaoInferior) {
    botoesNavegacaoInferior.classList.remove("hidden");
  }
  proximaBtn.classList.add("hidden");
  if (botaoProsseguir) {
    botaoProsseguir.classList.add("hidden");
  }

  const questao = questoesDaMateria[questaoIndex];

  questaoContainer.innerHTML = `
        <h3>${questao.enunciado}</h3>
        <div id="alternativasContainer">
            ${questao.alternativas
    .map(
      (alt, i) =>
        `<div class="alternativa" onclick="selecionarResposta(${i}, this)">${alt}</div>`
    )
    .join("")}
        </div>
    `;

  if (progressoContainer) {
    if (questaoIndex === 0) {
      progressoContainer.classList.add("hidden");
    } else {
      progressoContainer.classList.remove("hidden");
    }
  }

  if (btnVoltar) {
    btnVoltar.classList.remove("hidden");
    if (questaoIndex === 0) {
      btnVoltar.classList.add("disabled");
    } else {
      btnVoltar.classList.remove("disabled");
    }
  }
  atualizarProgresso();
}

function questaoAnterior() {
  if (questaoIndex > 0) {
    questaoIndex--;
    mostrarQuestao();
  }
}

function selecionarResposta(indiceSelecionado, elementoClicado) {
  const questao = questoesDaMateria[questaoIndex];
  const alternativas = document.querySelectorAll(".alternativa");

  alternativas.forEach((alt) => alt.classList.add("disabled"));

  if (indiceSelecionado === questao.correta) {
    elementoClicado.classList.add("correta");
    acertos++;
  } else {
    elementoClicado.classList.add("incorreta");
    alternativas[questao.correta].classList.add("correta");
    mostrarModal(questao.explicacao);
  }

  if (progressoContainer && questaoIndex === 0) {
    progressoContainer.classList.remove("hidden");
  }

  if (botoesNavegacaoInferior) {
    botoesNavegacaoInferior.classList.remove("hidden");
  }
  proximaBtn.classList.remove("hidden");
  if (botaoProsseguir) {
    botaoProsseguir.classList.remove("hidden");
  }
}

function proximaQuestao() {
  questaoIndex++;
  if (questaoIndex < questoesDaMateria.length) {
    mostrarQuestao();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  quizContainer.classList.add("hidden");
  resultadoContainer.classList.remove("hidden");

  if (navBotoes) {
    navBotoes.classList.add("hidden");
  }
  if (botoesNavegacaoInferior) {
    botoesNavegacaoInferior.classList.add("hidden");
  }
  if (progressoContainer) {
    progressoContainer.classList.add("hidden");
  }

  const totalQuestoes = questoesDaMateria.length;
  const percentual =
    totalQuestoes > 0 ? ((acertos / totalQuestoes) * 100).toFixed(1) : 0;

  resultadoTexto.textContent = `Você acertou ${acertos} de ${totalQuestoes} questões (${percentual}%).`;
}

function reiniciarQuiz() {
  resultadoContainer.classList.add("hidden");
  document.querySelector("header").classList.remove("hidden");

  if (progressoContainer) {
    progressoContainer.classList.add("hidden");
  }
}

function mostrarModal(texto) {
  explicacaoTexto.innerHTML =
    texto || "Explicação não disponível para esta questão.";
  modalExplicacao.classList.remove("hidden");
}

function fecharModal() {
  modalExplicacao.classList.add("hidden");
}

window.onclick = function (event) {
  if (event.target == modalExplicacao) {
    fecharModal();
  }
};

function atualizarProgresso() {
  const totalQuestoes = questoesDaMateria.length;

  if (typeof questoes === "undefined" || totalQuestoes === 0) {
    progressoBarra.style.width = "0%";
    progressoBarra.textContent = "0%";
    return;
  }

  const questaoAtual = questaoIndex;

  const progresso = ((questaoAtual + 1) / totalQuestoes) * 100;

  progressoBarra.style.width = `${progresso.toFixed(0)}%`;
  progressoBarra.textContent = `${progresso.toFixed(0)}%`;
}
