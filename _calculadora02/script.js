const resultado = document.querySelector('.result');
const confirmar = doerySelector('.igual');

//Recebe o valor do botão e cument.quexibe no display
function insert( valor ){
    resultado.innerHTML += valor;
}

//Limpa o display
function clean(){
    resultado.innerHTML = " ";
}

//Apaga o ultimo valor digitado
function del(){
    if( resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

//Realiza as operações  PORQUE NÃO FUNCIONA????
function confirma(){
    if(resultado.textContent != 'Erro') {
      document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }

}