// Receber as avaliações do comprador
var qualidade = parseFloat(prompt("Avalie a qualidade do produto (0 a 10):"));
var custoBeneficio = parseFloat(prompt("Avalie o custo benefício do produto (0 a 10):"));
var durabilidade = parseFloat(prompt("Avalie a durabilidade do produto (0 a 10):"));

// Calcular o índice do produto
var indice = (qualidade + custoBeneficio + durabilidade) / 3;

// Determinar o destaque do produto com base no índice
var destaque;

switch (true) {
  case (indice < 5):
    destaque = "Não ganha destaque";
    break;
  case (indice >= 5 && indice < 7):
    destaque = "Destaque na página da categoria";
    break;
  case (indice >= 7 && indice < 9):
    destaque = "Destaque em promoções";
    break;
  case (indice >= 9):
    destaque = "Destaque na página principal";
    break;
}

// Mostrar o índice do produto e o destaque atribuído
alert("Índice do produto: " + indice.toFixed(2) + "\nDestaque: " + destaque);