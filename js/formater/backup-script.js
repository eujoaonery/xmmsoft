// Função para adicionar uma competência à lista
function adicionarCompetencia(competencia) {
    if (competencia.trim() === '') return;

    const competenciasSelecionadas = document.getElementById('competencias-selecionadas');
    const novaCompetencia = document.createElement('span');
    novaCompetencia.textContent = competencia;
    competenciasSelecionadas.appendChild(novaCompetencia);
}

// Função para adicionar a competência digitada
function adicionarCompetenciaDigitada() {
    const competenciaInput = document.getElementById('competencia');
    adicionarCompetencia(competenciaInput.value);
    competenciaInput.value = ''; // Limpa a caixa de texto
}

// Adiciona a competência quando o usuário pressiona Enter
document.getElementById('competencia').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarCompetenciaDigitada();
        e.preventDefault(); // Previne o envio do formulário ao pressionar Enter
    }
});

// Funções de controle de menu e modal (já existentes)
function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function openModal(contentFile) {
    var modal = document.getElementById('modal');
    var modalBody = document.getElementById('modal-body');

    fetch('modals/' + contentFile)
        .then(response => response.text())
        .then(data => {
            modalBody.innerHTML = data;
            modal.style.display = "block";
        })
        .catch(error => {
            modalBody.innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
            modal.style.display = "block";
        });
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Fecha o modal quando o usuário clica fora dele
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



