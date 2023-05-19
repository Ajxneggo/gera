
//O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema que receba os dados dos candidatos (nome, idade, formação e cidade) para sinalizar se eles podem concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer". Utiliza as estrururas condicionais IF e ELSE.

//> Vaga para Equipe de Resgate -> O candidato deve ter de 25 a 50 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.

//> Vaga para Equipe de Tratamento -> O candidato deve ter de 22 a 60 anos, possuir formação em "Veterinária" e residir em Florianópolis.



// Função para validar os critérios e determinar a vaga adequada
function verificarVaga(nome, idade, formacao, cidade) {
    if (
      idade >= 25 &&
      idade <= 50 &&
      (formacao === "Biologia" || formacao === "Ecologia") &&
      cidade === "Florianópolis"
    ) {
      return "Vaga para Equipe de Resgate";
    } else if (
      idade >= 22 &&
      idade <= 60 &&
      formacao === "Veterinária" &&
      cidade === "Florianópolis"
    ) {
      return "Vaga para Equipe de Tratamento";
    } else {
      return "Não apto a concorrer";
    }
  }
  
  // Exemplo de uso
  var nome = prompt("Digite seu nome:");
  var idade = parseInt(prompt("Digite sua idade:"));
  var formacao = prompt("Digite sua formação:");
  var cidade = prompt("Digite sua cidade:");
  
  var vaga = verificarVaga(nome, idade, formacao, cidade);
  console.log("Nome do candidato: " + nome);
  console.log("Vaga disponível: " + vaga);
  alert("nao apto a concorrer")