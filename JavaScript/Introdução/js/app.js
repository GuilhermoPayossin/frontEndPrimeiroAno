// Console - Navegador
console.log('Olá, eu sou o console');

//Variáveis - Fracamente tipado
//Tipagem acontece no momento da atribuição
//let / const - escopo de bloco e de função
//var cria uma variável de escopo global, não é recomendado usar

let nomeUsuario = 'Guilhermo Spera';
let emailUsuario = 'guilhermo.spera@gmail.com';
let idUsuario = 823193;
let logado = true;
const DATA_NASCIMENTO = '02/12';

console.log(nomeUsuario, emailUsuario);
console.log(idUsuario, logado);
console.log(DATA_NASCIMENTO);

//typeof - Exibe a tipagem

console.log(nomeUsuario, typeof nomeUsuario);
console.log(emailUsuario, typeof emailUsuario);
console.log(idUsuario, typeof idUsuario);
console.log(logado, typeof (logado));
console.log(DATA_NASCIMENTO, typeof (DATA_NASCIMENTO));

logado = false;
console.log(logado);

//Gera um erro pois DATA_NASCIMENTO é uma const
//DATA_NASCIMENTO = '02/11';

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("Valor final de i = " + i + ".");

//template string - template literal
//começar e terminar com sinal de ` (crase)
//Placeholder ${variavel - metodo - objeto - calculo}

console.log(`Usuario ${nomeUsuario}`, `email ${emailUsuario}`, `id ${idUsuario}`);

const minhaDiv = document.getElementById(`divUsuario`);
console.log(minhaDiv);

minhaDiv.innerHTML = 
`
     <ul>
        <li class="bg-warning p-3 rounded text-dark">${nomeUsuario}</li>
        <li class="text-dark">${idUsuario}</li>
        <li class="text-dark">${emailUsuario}</li>
        <li class="text-dark">${logado}</li>
    </ul>

`