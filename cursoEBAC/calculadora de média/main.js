const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./aprovado.png"/>';
const imgReprovado = '<img src="./reprovado.png"/>'
const atividade = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>;'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>;'
const notaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = '';


form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaNotaFinal();
})

function adicionaLinha(){
    const inputNomeAti = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if(atividade.includes(inputNomeAti.value)){
alert(`A atividade: ${inputNomeAti.value} já foi inserida`)
    }else{
        let linha = `<tr>`
        linha += `<td>${inputNomeAti.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
        linha += `</tr>`
        
        linhas += linha

    }
atividade.push(inputNomeAti.value);
notas.push(parseFloat(inputNotaAtividade.value));

let linha = `<tr>`
linha += `<td>${inputNomeAti.value}</td>`;
linha += `<td>${inputNotaAtividade.value}</td>`;
linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
linha += `</tr>`

linhas += linha


inputNotaAtividade.value = '';
inputNomeAti.value = '';

}

function atualizaTabela(){


const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;
}

function atualizaNotaFinal(){
    const mediaFinal = calcMed();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML= mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calcMed(){
    let somaNota = 0;

    for(i = 0;i < notas.length;i++){
somaNota += notas[i]
    }

    return somaNota / notas.length
}