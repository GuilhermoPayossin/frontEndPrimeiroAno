//Recuperar o tbody da página
const tbody = document.querySelector('#historicoContas');
console.log(tbody);

//Recuperar o formulário
document.querySelector('form').addEventListener('submit', function (e) {
    //Cancelar submit
    e.preventDefault();

    //Criar um array contendo os campos do formulário
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta'),
    ];

    //Criar um tr
    const tr = document.createElement('tr');

    //Percorrer o array campos

    campos.forEach(campo => {

        const td = document.createElement('td');

        //Passar o valor do formulário para o td
        td.textContent = campo.value;

        //Colocar o td dentro do tr
        tr.appendChild(td);

    });
    //Colocar o tr dentro do tbody

    tbody.appendChild(tr);

    //Limpar o formulário
    this.reset();
});
