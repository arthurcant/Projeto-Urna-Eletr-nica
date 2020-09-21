let seuVotoPara = document.querySelector(".d-1-1 span");
let cargo = document.querySelector(".d-1-2 span");
let descricao = document.querySelector(".d-1-4");
let aviso = document.querySelector(".d-2");
let lateral = document.querySelector(".d-1-right");
let numeros = document.querySelector(".d-1-3");

let etapaAtual = 0;
let numero = '';

function comecarEtapar(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i = 0; i < etapa.numeros; i++){
        if(i === 0){
        numeroHtml += '<div class = "numero"> </div>';
        }else {
            numeroHtml += '<div class = "numero"> </div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML= '';
    aviso.style.display = 'none';
    lateral.innerHTML ='';
    numeros.innerHTML = numeroHtml;
}

function atualizarInterface() {

}

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(numero !== null){
        numero.innerHTML = n;
        numero = `${numero} ${n}`;

        elNumero.classList.remove('pisca');
    }
}

function branco(){
    alert('Clicou no branco')
}

function corrige(){
    alert('Clicou no corrige')
}

function confirmar(){
    alert('Clicou no confirmar')
}

comecarEtapar();