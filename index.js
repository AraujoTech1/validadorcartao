const readline = require('readline');

// Função para ler a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função que valida a bandeira do cartão
function identificarBandeira(numeroCartao) {
  numeroCartao = numeroCartao.replace(/\D/g, '');

  if (numeroCartao.startsWith('4')) {
    return 'Visa';
  } else if (/^5[1-5]/.test(numeroCartao)) {
    return 'Mastercard';
  } else if (numeroCartao.startsWith('4011') || numeroCartao.startsWith('4312')) {
    return 'Elo';
  } else if (numeroCartao.startsWith('6062')) {
    return 'Hypercard';
  } else {
    return 'Bandeira desconhecida';
  }
}

// Função para exibir o número do cartão e a bandeira
function exibirBandeira(numeroCartao) {
  const bandeira = identificarBandeira(numeroCartao);
  console.log(`Número do Cartão: ${numeroCartao} - Bandeira: ${bandeira}`);
}

// Perguntar o número do cartão ao usuário
rl.question('Digite o número do cartão: ', (numeroCartao) => {
  exibirBandeira(numeroCartao);  // Exibe a bandeira correspondente
  rl.close();  // Fecha a interface de leitura
});
