// Segmentação do numero de telefone

function formatarTelefone(input) {
  var telefone = input.value.replace(/\D/g, "");
  telefone = telefone.substring(0, 11);

  if (telefone.length > 0) {
    telefone = "(" + telefone;
  }
  if (telefone.length > 3) {
    telefone = telefone.slice(0, 3) + ") " + telefone.slice(3);
  }
  if (telefone.length > 10) {
    telefone = telefone.slice(0, 10) + "-" + telefone.slice(10);
  }
  input.value = telefone;
}
// Segmentação do numero de CNPJ

function formatarCNPJ(input) {
  var cnpj = input.value.replace(/\D/g, ""); // Remove o que nao for numero

  // segmenta da forma que é o CNPJ
  if (cnpj.length > 0) {
    cnpj = cnpj.substring(0, 2) + "." + cnpj.substring(2);
  }
  if (cnpj.length > 6) {
    cnpj = cnpj.substring(0, 6) + "." + cnpj.substring(6);
  }
  if (cnpj.length > 10) {
    cnpj = cnpj.substring(0, 10) + "/" + cnpj.substring(10);
  }
  if (cnpj.length > 15) {
    cnpj = cnpj.substring(0, 15) + "-" + cnpj.substring(15);
  }

  input.value = cnpj;
}

// Segmenta os carateres do CEP

document.getElementById("cep").addEventListener("input", function () {
  const cep = this.value.replace(/\D/g, "");
  if (cep.length > 5) {
    this.value = cep.slice(0, 5) + "-" + cep.slice(5, 8); //
  } else {
    this.value = cep;
  }
});

// Busca e exibe o endereço, bairro, cidade e UF, atraves do CEP

document.getElementById("cep").addEventListener("blur", function () {
  const cep = this.value.replace(/\D/g, "");

  if (cep.length === 8) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!("erro" in data)) {
          document.getElementById("endereco").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("uf").value = data.uf;
        } else {
          alert("CEP não encontrado.");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao buscar o CEP.");
      });
  } else {
    alert("Por favor, insira um CEP válido.");
  }
});
// teste___________________________________________________________________

/// Função para verificar se todos os campos estão preenchidos
function verificarCamposPreenchidos() {
    var campos = document.querySelectorAll('input[required]');
    for (var i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === '') {
            return false;
        }
    }
    return true;
}





