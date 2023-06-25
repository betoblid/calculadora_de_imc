
//selecionando elementos no Dom
const peso = document.getElementById("cxpeso")
const altura = document.getElementById("cxaltura")
let cxtext = document.getElementById("valor_imc")
let cxalert = document.getElementById("aviso")
const box_resultado = document.getElementById("box-resu")
const fecha = document.getElementById("button_fecha")
const enviar = document.getElementById("envia")

//function que tera uma variavel de controle que decidirar se irar procegui
let continuar = false;

//essa function será acionada quando o evento click ser acionando
//ela será responsavel por calcular a media do aluno
enviar.addEventListener("click", function (event) {
    //esse method proibi o carregamento da pagina quando se envia um formulario
    event.preventDefault()

    //function que será chamada para falidar os resultados do formulario
    validar_form()

    //chamar o card resultado
    if(continuar){
        chamaresult()
    }
})
//function para feixar a mensagem com os resultados
//butão fechar
fecha.addEventListener("click", function () {
    if(box_resultado.classList.contains("on")){
        box_resultado.classList.remove("on")
        box_resultado.classList.add("hidden")
    }else{
    
        box_resultado.classList.remove("hidden")
        box_resultado.classList.add("on")

    }
})
//function que chamará o resultado esse resultado é passado numa box e aparece sobre o form
function chamaresult(){
    //condiçao caso tiver o hidden será tirado e se não tiver colocara
    if(box_resultado.classList.contains("hidden")){
        box_resultado.classList.remove("hidden")
        box_resultado.classList.add("on")
    }else{
        box_resultado.classList.add("hidden")
    }
    //function que dará os valores pra box
    valor()
}

//funcyion que valida formulario caso o usuario não tiver digitado valores
function validar_form(){
    
    //condição que verificará se digitarão algo
    if(String(peso.value) == ""){
        alert("digite seu peso")
    } if((String(altura.value) == "")){
        alert("digite sua altura")
    } else{
        continuar = true
    }
}

//fuction que passará todos os valores no Dom
function valor () {
    //faz a conta do IMC e armazena na variavel
    let imc = peso.value / (altura.value * altura.value)
    //passa os resultados no DOm
    document.querySelector("#result_text").textContent = verific_imc(imc)
    
    document.querySelector("#result_imc").textContent = imc.toFixed(1)
    cxalert.textContent = verific_imc(imc)
    cxtext.textContent = imc.toFixed(1)
}

//function responsavel por verificar se o IMC está bom para o peso da pessoa
//ou está passando do limite
function verific_imc(imc){
    //variavel para armazenar valor passado pela condição
    let status = ""

    //condição da verificação
    if(imc < 17){
        status = "Muito abaixo do peso"
    } else if(imc == 17 || imc <= 18.49){
        status = "Abaixo do peso"
    } else if(imc == 18.50 || imc <= 24.99){
        status = "Peso normal"
    } else if(imc == 25 || imc <= 29.99){
        status = "Acima do peso"
    } else if(imc == 30 || imc <= 34.99){
        status = "Obesidade I"
    } else if(imc == 35 || imc <= 39.99){
        status = "Obesidade II"
    } else if(imc > 40){
        status = "Obesidade III (mórbida)"
    } else{
        status = "tente de novo!"
    }
    //retorno que essa function passará
    return status;
}
	

