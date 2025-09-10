const materiaSelect = document.getElementById('materiaSelect');
const iniciarBtn = document.getElementById('iniciarBtn');
const quizContainer = document.getElementById('quizContainer');
const questaoContainer = document.getElementById('questaoContainer');
const materiaTitulo = document.getElementById('materiaTitulo');
const proximaBtn = document.getElementById('proximaBtn');
const resultadoContainer = document.getElementById('resultadoContainer');
const resultadoTexto = document.getElementById('resultadoTexto');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const modalExplicacao = document.getElementById('modalExplicacao');
const explicacaoTexto = document.getElementById('explicacaoTexto');

let materiaAtual = '';
let questaoIndex = 0;
let acertos = 0;
let questoesDaMateria = [];

iniciarBtn.addEventListener('click', iniciarQuiz);
proximaBtn.addEventListener('click', proximaQuestao);
reiniciarBtn.addEventListener('click', reiniciarQuiz);

function iniciarQuiz() {
  materiaAtual = materiaSelect.value;
  if (!materiaAtual) {
    alert('Selecione uma matéria primeiro!');
    return;
  }

  questaoIndex = 0;
  acertos = 0;
  questoesDaMateria = [...questoes[materiaAtual]]; 

  document.querySelector('header').classList.add('hidden');
  resultadoContainer.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  
  materiaTitulo.textContent = `Matéria: ${materiaAtual.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`;
  
  mostrarQuestao();
}

function mostrarQuestao() {

  proximaBtn.classList.add('hidden');

  const questao = questoesDaMateria[questaoIndex];
  
  questaoContainer.innerHTML = `
    <h3>${questao.enunciado}</h3>
    <div id="alternativasContainer">
      ${questao.alternativas.map((alt, i) => 
        `<div class="alternativa" onclick="selecionarResposta(${i}, this)">${alt}</div>`
      ).join('')}
    </div>
  `;
}

function selecionarResposta(indiceSelecionado, elementoClicado) {
  const questao = questoesDaMateria[questaoIndex];
  const alternativas = document.querySelectorAll('.alternativa');

  alternativas.forEach(alt => alt.classList.add('disabled'));

  if (indiceSelecionado === questao.correta) {
    elementoClicado.classList.add('correta');
    acertos++;
  } else {
    elementoClicado.classList.add('incorreta');
    alternativas[questao.correta].classList.add('correta');
    mostrarModal(questao.explicacao);
  }

  proximaBtn.classList.remove('hidden');
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
  quizContainer.classList.add('hidden');
  resultadoContainer.classList.remove('hidden');
  
  const totalQuestoes = questoesDaMateria.length;
  const percentual = totalQuestoes > 0 ? (acertos / totalQuestoes * 100).toFixed(1) : 0;

  resultadoTexto.textContent = `Você acertou ${acertos} de ${totalQuestoes} questões (${percentual}%).`;
}

function reiniciarQuiz() {
  resultadoContainer.classList.add('hidden');
  document.querySelector('header').classList.remove('hidden');
}

function mostrarModal(texto) {
  explicacaoTexto.innerHTML = texto || "Explicação não disponível para esta questão.";
  modalExplicacao.classList.remove('hidden');
}

function fecharModal() {
  modalExplicacao.classList.add('hidden');
}

window.onclick = function(event) {
  if (event.target == modalExplicacao) {
    fecharModal();
  }
}