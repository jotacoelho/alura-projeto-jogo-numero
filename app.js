let numeroAleatorio;
let numeroLimiteChute = 10;
let numeroChutes;
let listaNumerosSorteados = [];

iniciarJogo();

function iniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    numeroChutes = 1;
    zerarValorInput();
    gerarMensagemInicial();
    document.getElementById('reiniciar').setAttribute("disabled",true);
    console.log(`Alteração via git local: O número secreto é: ${numeroAleatorio}`);
}

function gerarMensagemInicial() {
    alterarTextoTag('h1',"Jogo do número secreto");
    alterarTextoTag('p',"Escolha um número entre 1 e "+numeroLimiteChute);
    alterarTextoTag('h3',`O número secreto é ${numeroAleatorio}`);
}

function alterarTextoTag( tag, mensagem){
    let elemento = document.querySelector(tag);
    elemento.innerHTML = mensagem;
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimiteChute+1);    
    let tamanhoListaNumerosSorteados = listaNumerosSorteados.length;

    if (tamanhoListaNumerosSorteados == numeroLimiteChute){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute(){
    console.log("Botão de chutar clicado");
    let entrada = document.querySelector('input').value;
    console.log("Valor digitado foi: "+ entrada);

    if (entrada == numeroAleatorio){
        alterarTextoTag('h1','Acertou');
        alterarTextoTag('p','Você descobriu o número secreto');
        numeroChutes > 1 ? alterarTextoTag('h3',"Foram necessárias " + numeroChutes + " tentativas! A lista de números sorteados até o momento foi: "+listaNumerosSorteados)
         : alterarTextoTag('h3',"Foi necessário realizar apenas " + numeroChutes + " tentativa!");
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if( entrada < numeroAleatorio ){
            alterarTextoTag('p',"O valor deve ser maior");
        } else{
            alterarTextoTag('p',"O valor deve ser menor");
        }
        zerarValorInput();        
        numeroChutes++;
    }
}

function zerarValorInput(){
    document.querySelector('input').value = '';
}

function apresentarNumerosSorteados(){
    alterarTextoTag('h3',`Lista de números sorteados: ${listaNumerosSorteados}`);
}