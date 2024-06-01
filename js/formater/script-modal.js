// Função para abrir o modal e carregar o conteúdo
function openModal(contentFile) {
    var modal = document.getElementById('modal');
    var modalBody = document.getElementById('modal-body');

    fetch(contentFile)
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

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Fecha o modal quando o usuário clica fora dele
//window.onclick = function(event) {
    //var modal = document.getElementById('modal');
    //if (event.target == modal) {
    //    modal.style.display = "none";
   // }
//}