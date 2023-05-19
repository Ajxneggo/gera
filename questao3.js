//Desenvolver a lógica de respostas /
// pontuação para um mini-quiz utilizando a estrutura 
//condicional switch/case. 
//O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo).
// Todas as respostas possuem uma pontuação específica.


let pontuacaoTotal = 0;

// Pergunta 1
let resposta1 = prompt("Quais séries a seguir englobam melhor a temática de vampiros e assombração?\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: The Series");

// Verificar resposta da pergunta 1
switch (resposta1.toUpperCase()) {
  case "A":
    pontuacaoTotal += 2;
    break;
  case "B":
    pontuacaoTotal += 3;
    break;
  case "C":
    pontuacaoTotal += 2;
    break;
  case "D":
    pontuacaoTotal += 1;
    break;
  default:
    alert("Opção inválida! A resposta deve ser A, B, C ou D.");
}

// Pergunta 2
// Aqui você pode adicionar a próxima pergunta seguindo a mesma estrutura

// Exibir pontuação total
alert("Sua pontuação total é: " + pontuacaoTotal);