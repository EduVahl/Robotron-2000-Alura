const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((element) => {
    element.addEventListener('click', (e) => {
        ajustar(e.target.dataset.controle, e.target.parentNode);
        ajustarEstatistica(e.target.dataset.peca)
    })
})


function ajustar(x , y){
    const peca = (y.querySelector('[data-contador]'));
    
    if (x === "+"){
        peca.value = parseInt(peca.value) + 1
    }

    else if (peca.value > 0){
        peca.value = parseInt(peca.value) - 1
    }
}

function ajustarEstatistica (x){
    estatistica.forEach((element) => {
        element.textContent = parseInt(element.textContent) + pecas[x][element.dataset.estatistica]
    })
}


















/*
for(let i = 0; i < controle.length; i++){
    controle[i].addEventListener('click', () => {
    contador[i].value = parseInt(contador[i].value) - 1
        
    })

controlePos[i].addEventListener('click', () => {
    contador[i].value = parseInt(contador[i].value) + 1
})
}
*/