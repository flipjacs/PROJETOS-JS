let H = Number(prompt("Insira sua altura"))
let P = Number(prompt("Insira seu peso"))
let imc = P / (H * H)

if ( H <=0 & P <=0 ){
  alert ("Por favor, insira dados corretos")
}

else if (imc < 18.5) {
  alert("Você está classificado como MAGREZA")
}
else if (imc < 24.9) {
  alert("Você é normal")
}
else if (imc < 29.9){
  alert("Você está em SOBREPESO")
}
else if (imc < 39.9){
  alert("Você está em OBESDIDADE 1")
}
else if (imc > 40){
  alert("Você está em OBESDIDADE 2")
}