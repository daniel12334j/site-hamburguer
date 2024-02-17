function clicar(){
var campoA = document.getElementById('nua').value;
var campoB = document.getElementById('nub').value;

var numeroA = Number(campoA);
var numeroB= Number(campoB);

if(numeroB > numeroA){
    alert('Formulário aceito')

}else{
    alert(`O número ${numeroB} não é maior que ${numeroA}, TENTE NOVAMENTE!!!`)
}
}