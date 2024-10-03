/** 
 * Desafio de Projeto GFT Start #6 - Lógica de Programação: Calculadora de Partidas Rankeadas
 * 
 * O Que deve ser utilizado: variáveis, operadores, laços de repetição, estruturas de decisões e funções
 * 
 */

// Criar a função calcularNivel()
function calcularNivel(vitorias, derrotas) {
    // Calculo do saldo de ganhos
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Definir o nivel com base na quantidade de vitórias
    if (vitorias < 10){
        nivel = "Ferro";

    } else if (vitorias >= 11 && vitorias <= 20){
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50){
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80){
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90){
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100){
        nivel = "Lendário";
    } else {
        nivel = "Imortal"
    }

    // Exibir a mensagem final
    //console.log("O herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel);
    console.log(`O herói tem de saldo de "${saldoVitorias}" está no nível de "${nivel}"`);
 
}// fim função

// Exemplo de uso
calcularNivel(60, 40);