
const form = document.querySelector("#form")
const resultadoSucesso = document.querySelector('.sucesso')
const resultadoErro = document.querySelector('.erro')



form.addEventListener('submit', (e)=>{
    e.preventDefault()

    let primeiroValor = document.querySelector('#primeiroCampo').value
    let segundoValor = document.querySelector('#segundoCampo').value


    if(primeiroValor < segundoValor ){
        resultadoSucesso.style.display = 'flex';
        resultadoErro.style.display = 'none';
    } else{
        resultadoErro.style.display = 'flex';  resultadoSucesso.style.display = 'none';
    }


   primeiroValor.value = "";
   segundoValor.value = "";

})