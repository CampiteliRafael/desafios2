
// 1 //
function pertenceFibonacci(n) {
    if (n === 0 || n === 1) {
        return true; // 0 e 1 estão sempre na sequência
    }

    let a = 0, b = 1;

    while (b < n) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b === n;
}

// Entrada do usuário ou número pré-definido
const numero = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci:"));

// Verifica se o número pertence à sequência e exibe a mensagem apropriada
if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}

// 2 //

function contarLetraA(str) {
    // Convertendo a string para minúsculas para facilitar a contagem
    const strLower = str.toLowerCase();
    let contador = 0;

    // Percorre cada caractere da string e conta a quantidade de 'a'
    for (let i = 0; i < strLower.length; i++) {
        if (strLower[i] === 'a') {
            contador++;
        }
    }

    return contador;
}

// Entrada do usuário ou string pré-definida
const entrada = prompt("Informe uma string para verificar a quantidade de letras 'a':");

// Conta a quantidade de letras 'a' e exibe a mensagem apropriada
const quantidade = contarLetraA(entrada);

console.log(`A letra 'a' ocorre ${quantidade} vez(es) na string fornecida.`);

// 3 //

let indice = 12;
let soma = 0;
let k = 1;

// Executa o loop enquanto k for menor que indice
while (k < indice) {
    k = k + 1; // Incrementa k
    soma = soma + k; // Adiciona k à soma
}

// valor final de soma 65 //
console.log(soma);

// 4 //

/* a) 1, 3, 5, 7, ___

Lógica: A sequência é uma progressão aritmética com uma diferença comum de 2.
Próximo elemento: O próximo número é 7 + 2 = 9.

b) 2, 4, 8, 16, 32, 64, ____

Lógica: A sequência é uma progressão geométrica onde cada número é o dobro do anterior.
Próximo elemento: O próximo número é 64 * 2 = 128.

c) 0, 1, 4, 9, 16, 25, 36, ____

Lógica: A sequência são os quadrados dos números inteiros (0², 1², 2², 3², etc.).
Próximo elemento: O próximo número é 7² = 49.

d) 4, 16, 36, 64, ____

Lógica: A sequência são os quadrados dos números pares (2², 4², 6², 8²).
Próximo elemento: O próximo número é 10² = 100.

e) 1, 1, 2, 3, 5, 8, ____

Lógica: A sequência é a sequência de Fibonacci, onde cada número é a soma dos dois números anteriores.
Próximo elemento: O próximo número é 5 + 8 = 13.

f) 2, 10, 12, 16, 17, 18, 19, ____

Lógica: A sequência parece ser uma combinação dos números consecutivos com algumas lacunas.
Após o número 19, a sequência continua com os próximos números consecutivos.
Próximo elemento: O próximo número é 20. */

// 5 //

/* 
Ligue o primeiro interruptor (Interruptor A) e deixe-o ligado por um tempo significativo (por exemplo, 10-15 minutos). Isso permitirá que a lâmpada associada a este interruptor esquente.

Após o tempo ter passado, desligue o Interruptor A e ligue o segundo interruptor (Interruptor B). Deixe o Interruptor B ligado por um tempo menor (alguns segundos são suficientes) e então vá imediatamente para as salas das lâmpadas.

Na primeira sala das lâmpadas:

Toque nas lâmpadas com cuidado.
A lâmpada que está acesa é a que está conectada ao Interruptor B (porque ela foi ligada recentemente).
A lâmpada que está apagada, mas ainda quente, é a que está conectada ao Interruptor A (porque ela esteve ligada por um tempo e teve tempo para aquecer).
A lâmpada que está apagada e fria é a que está conectada ao Interruptor C (porque nunca foi ligada). */
