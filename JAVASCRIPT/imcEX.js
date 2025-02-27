let H = Number(prompt("Insira sua altura em METROS"))
let P = Number(prompt("Insira seu peso em KG"))
let imc = P / (H * H)
let imcl= imc.toFixed(2)


if ( H <=0 & P <=0 ){
  alert ("Por favor, insira dados corretos")
}

else if (imc < 18.5) {
  alert( imcl +" Você está classificado como MAGREZA" )
}
else if (imc < 24.9) {
  alert("Seu IMC é: " + imcl +", você está classificado como NORMAL")
}
else if (imc < 29.9){
  alert("Seu IMC é: " + imcl +", você está classificado como SOBREPESO")
}
else if (imc < 39.9){
  alert("Seu IMC é: " + imcl +", você está classificado como OBESIDADE 1")
}
else if (imc > 40){
  alert("Seu IMC é: " + imcl +", você está classificado como OBESIDADE 2")
}