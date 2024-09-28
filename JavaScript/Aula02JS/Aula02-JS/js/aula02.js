//Sorteando o número

/*let primeiroNumero = Math.random();
console.log(primeiroNumero);*/

//Gerando uma parte inteira para o numero
/*primeiroNumero*=100;
console.log(primeiroNumero);*/

//Retornando apenas a parte inteira do número
/*primeiroNumero = parseInt(primeiroNumero);
console.log(primeiroNumero);*/


//Retornando o próximo número inteiro
/*primeiroNumero = Math.ceil(primeiroNumero);
console.log(primeiroNumero);*/

//Retornando o próprio inteiro
/*primeiroNumero = Math.floor(primeiroNumero);
console.log(primeiroNumero);*/

//Retorna o próximo inteiro caso o decimal seja >= 50
//Retorna o mesmo inteiro caso o decimal seja <= 49
//Preferível ao uso
/*primeiroNumero = Math.round(primeiroNumero);
console.log(primeiroNumero);*/

const primeiroNumero = Math.round(Math.random() * 100);
const segundoNumero = Math.round(Math.random() * 100);

document.querySelector('#primeiroNumero').textContent = primeiroNumero;
document.querySelector('#segundoNumero').textContent = segundoNumero;

let resultado = primeiroNumero + segundoNumero;
document.querySelector('#soma').textContent = resultado;

resultado = primeiroNumero - segundoNumero;
document.querySelector('#subtracao').textContent = resultado;

resultado = primeiroNumero * segundoNumero;
document.querySelector('#multiplicacao').textContent = resultado;

resultado = primeiroNumero / segundoNumero;
document.querySelector('#divisao').textContent = resultado.toFixed(2);

resultado = primeiroNumero ** segundoNumero;
document.querySelector('#potencia').textContent = resultado.toFixed(2);

//Método construtor de array
//const meuArray = new Array(5);

//console.table para imprimir arrays com precisão

const numeros = [];
//Pegar o botão, adicionar um Listener para o clique e criar uma função para gerar o array quando necessário
document.querySelector('#btnArray').addEventListener('click', function() {
    //alert('Botao clicado');
    for (let i = 0; i <= 9; i++) {
        numeros[i] = Math.round(Math.random() * 100);
    }
    document.querySelector('#array').textContent = numeros;
});

document.querySelector('#btnMaior').addEventListener('click', () => {
    let maior = Math.max(...numeros);
    // for (let i = 0; i <= numeros.length; i++) {
    //     if (numeros[i] > maior) {
    //         maior = numeros[i];
    //     }
    // }
    document.querySelector('#maiorArray').textContent = maior;
});

document.querySelector('#btnMenor').addEventListener('click', () => {
    let menor = Math.min(...numeros);
    document.querySelector('#menorArray').textContent = menor;
});

const multiplicados = [];
document.querySelector('#btnMultiplica').addEventListener('click', () => {
    multiplicados.splice(0);
    numeros.forEach(numero => {
        multiplicados.push(numero * 2);
    })
    document.querySelector('#arrayMultiplicado').textContent = multiplicados;
});



