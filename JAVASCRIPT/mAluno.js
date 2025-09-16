let AV1 = Number(prompt("Insira a nota da Avaliação 1"))
let AV2 = Number(prompt("Insira a nota da Avaliação 2"))
let AV3 = Number(prompt("Insira a nota da Avaliação 3"))
const media = (AV1 + AV2 + AV3)/3
if (AV1<0 || AV2<0 || AV3<0 || AV1>10 || AV2>10 || AV3>10){
  console.log ("NOTAS INVÁLIDAS")
}
else if (media >= 7){
  console.log ("Você passou de semestre!")
}
else if (media <7 && media >= 5){
  console.log ("Você vai fazer a prova final!")
}
else if (media <5){
  console.log ("VAI PAGAR MATÉRIA KKKKK")
}