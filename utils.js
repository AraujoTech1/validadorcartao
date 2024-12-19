function identificarBandeira(numeroCartao) {
    const numero = numeroCartao.toString();

    if (numero.startsWith('4')) {
        return 'Visa';
    } else if (
        (parseInt(numero.slice(0, 2)) >= 51 && parseInt(numero.slice(0, 2)) <= 55) ||
        (parseInt(numero.slice(0, 4)) >= 2221 && parseInt(numero.slice(0, 4)) <= 2720)
    ) {
        return 'Mastercard';
    } else if (
        numero.startsWith('4011') || numero.startsWith('4312') 
    ) {
        return 'Elo';
    } else if (numero.startsWith('6062')) { 
        return 'Hypercard';
    } else {
        return 'Bandeira desconhecida';
    }
}

module.exports = identificarBandeira;
