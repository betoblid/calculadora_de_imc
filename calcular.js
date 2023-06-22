const peso = document.getElementById("cxpeso")
const altura = document.getElementById("cxaltura")
let cxtext = document.getElementById("valor_imc")
let cxalert = document.getElementById("aviso")
const box_resultado = document.getElementById("box-resu")
const fecha = document.getElementById("button_fecha")
// apenas para nao enviar o formulario
//tive que por aqui senão daria conflito
const enviar = document.getElementById("envia")
enviar.addEventListener("click", function (event) {
    event.preventDefault()

    validar_cx()
    //chamar o card resultado
    if(continuar == true){
        chamaresult()
    }
})
//function para feixar a mensagem com os resultados
fecha.addEventListener("click", function () {
    if(box_resultado.classList.contains("on")){
        box_resultado.classList.remove("on")
        box_resultado.classList.add("hidden")
    }else{
    
        box_resultado.classList.remove("hidden")
        box_resultado.classList.add("on")

    }
})

function chamaresult (){
    if(box_resultado.classList.contains("hidden")){
        box_resultado.classList.remove("hidden")
        box_resultado.classList.add("on")
    }else{
        box_resultado.classList.add("hidden")
    }
    valor()
}
//function que tera uma variavel de controle que decidirar se irar procegui
let continuar = false;

function validar_cx(){
    
    if(String(peso.value) == ""){
        alert("digite seu peso")
    } if((String(altura.value) == "")){
        alert("digite sua altura")
    } else{
        continuar = true
    }
}

function valor () {
    let imc = peso.value / (altura.value * altura.value)
    document.querySelector("#result_text").textContent = verific_imc(imc)
    document.querySelector("#result_imc").textContent = imc.toFixed(1)
    cxalert.textContent = verific_imc(imc)
    cxtext.textContent = imc.toFixed(1)
}


function verific_imc(imc){
    let status = ""

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
    return status;
}
	

