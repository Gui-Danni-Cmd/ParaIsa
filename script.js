let valorDigitado = document.querySelector("#campo")
let valorRando
const respostaElement = document.querySelector("#resposta")





function responder(elemento){
    respostaElement.innerHTML = elemento
}

const respostas = [
    "Não tenho tanta certeza.",
    "Acho que não",
    "Ainda não.",
    "Sem dúvidas?",
    "Pergunte novamente.",
    "Errou",
    "Acho que ainda não.",
    "Melhor não te dizer agora.",
    "Minhas fontes dizem não.",
    "Concentre-se e pergunte novamente.",
    "Concentre-se e pergunte novamente.",
]

const certas = [
    "Guilherme",
    "Gui",
    "Você",
    "Vc",
    "Guilherme Dannilo",
    "Guilherme Danilo",
    "Guilherme Dannilo Maciel",
    "Guilherme Dannilo Maciel Coelho",
    "Guilherme Danilo Maciel",
    "Guilherme Danilo Maciel Coelho",
]

const respCertaN = [
    "Mae",
    "pai",
    "Mamae",
    "Papai",
    "irmã",
    "irmão",
    "Mãe",
    "pai",
    "Mamãe",
    "Papai",
    "irma",
    "irmao"
]




// const resValorDigitado = valorDigitado.map(valor => valor.toUpperCase())

const vaCerta = certas.map(valor => valor.toUpperCase())
const vaResposta = respostas.map(valor => valor.toLocaleUpperCase())
const certahihi = respCertaN.map( valor => valor.toUpperCase())


function ouvirResposta(){
    valorRando = Math.round(Math.random() * 10)
    console.log(valorDigitado.value)
    if(valorDigitado.value == ""){
        responder("Nada digitado no campo")
    }
    else{
        if (vaCerta.includes(valorDigitado.value.toUpperCase())){
            responder("Uhuuu")
        }
        else{
            if(certahihi.includes(valorDigitado.value.toUpperCase())){
                responder("Sim. Mas não é essa resposta. rsrsrsr")
            }
            else{
                responder(respostas[valorRando])
            }
        }
    }
    
}



console.log(vaCerta)