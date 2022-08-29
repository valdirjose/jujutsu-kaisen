

//Vamos pensar um pouco:

//1 - Quando eu clicar em avançar, ele muda o card para o próximo. 

//1.1 - Pegar o HTML da seta avançar e voltar;

const btnVoltar = document.getElementById("btn-voltar");

const btnAvancar = document.getElementById("btn-avancar");

const cartoes = document.querySelectorAll(".cartao"); 

let cartaoAtual = 0;

function esconderCartaoSelecionado() {

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

}

function mostrarCartao (indiceCartao) {
    cartoes[indiceCartao].classList.add("selecionado");
}

//1.2 - Identificar o clique do usuário em avançar; 

btnAvancar.addEventListener("click", function () {

    if(cartaoAtual==cartoes.length-1) return

//1.4 - Buscar o cartão que está selecionado e escondê-lo.

    esconderCartaoSelecionado();
    
//1.3 - Fazer com que o proximo card apareça;

    cartaoAtual++; 
    mostrarCartao(cartaoAtual);


});



//2 - Quando eu clicar em voltar, retorna para o card anterior.

//2.1 - Pegar o HTML da seta voltar;
//2.2 - Identificar o clique do usuário em voltar; 

btnVoltar.addEventListener("click", function () {

    if(cartaoAtual=== 0) return

//2.4 - Buscar o cartão que está selecionado e escondê-lo.

    esconderCartaoSelecionado();
    
//2.3 - Fazer com que o card anterior apareça;

    cartaoAtual--; 
    mostrarCartao(cartaoAtual);

});

    


