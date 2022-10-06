const body = document.body 
const calculadora = document.createElement('div')
const input1 = document.createElement('input')
const input2 = document.createElement('input') 
const soma = document.createElement('button')
const divisao = document.createElement('button')
const subtracao = document.createElement('button')
const multiplicacao = document.createElement('button')

const campoResultado = document.createElement('div')
const botoes = document.createElement('div')

body.appendChild(calculadora)
calculadora.appendChild(input1)
calculadora.appendChild(input2)
botoes.appendChild(soma)
botoes.appendChild(divisao)
botoes.appendChild(subtracao)
botoes.appendChild(multiplicacao)
calculadora.appendChild(botoes)
calculadora.appendChild(campoResultado)


var mais = document.createTextNode("+")
soma.appendChild(mais)
var menos = document.createTextNode("-")
subtracao.appendChild(menos)
var vezes = document.createTextNode("x")
multiplicacao.appendChild(vezes)
var divide = document.createTextNode("/")
divisao.appendChild(divide)


input1.style.marginBottom = "10px"
input1.style.marginTop = "8px"
input1.style.borderRadius = "10px"
input2.style.marginBottom = "8px"
input2.style.marginTop = "8px"
input2.style.borderRadius = "10px"


campoResultado.style.display = "flex"
campoResultado.style.marginTop = "10px"
campoResultado.style.height = "80px"
campoResultado.style.width = "150px"
campoResultado.style.justifyContent = "center"
campoResultado.style.alignItems = "center"
campoResultado.style.color = "black"

calculadora.style.display = "flex"
calculadora.style.justifyContent = "center"
calculadora.style.alignItems = "center"
calculadora.style.flexDirection = "column"
calculadora.style.height = "600px"
calculadora.style.width = "300px"
calculadora.style.fontSize = "20px"
calculadora.style.color = "white"

body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.height = "100vh"
body.style.backgroundColor = "#90918e"

soma.addEventListener('click', () => {
    campoResultado.innerHTML = ""
    var resultado =  document.createTextNode(parseInt(input1.value)+parseInt(input2.value))
    campoResultado.appendChild(resultado)
})

subtracao.addEventListener('click', () => {   
    campoResultado.innerHTML = ""
    var resultado =  document.createTextNode(parseInt(input1.value)-parseInt(input2.value))
    campoResultado.appendChild(resultado)
})

divisao.addEventListener('click', () => {   
    campoResultado.innerHTML = ""
    var resultado =  document.createTextNode(parseInt(input1.value)/parseInt(input2.value))
    campoResultado.appendChild(resultado)
})

multiplicacao.addEventListener('click', () => {
    campoResultado.innerHTML = ""
    var resultado =  document.createTextNode(parseInt(input1.value)*parseInt(input2.value))
    campoResultado.appendChild(resultado)
})