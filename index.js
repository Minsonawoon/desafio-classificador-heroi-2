function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = '';

    if (vitorias <= 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias >= 90 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

//exemplo
let resultado = calcularNivel(85, 20);
console.log(resultado);
