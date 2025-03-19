let nomeFuncionario = prompt("Insira seu nome")
let salario = Number(prompt("Agora insira seu salario"))
let porcentagemAumento = Number(prompt("Insira a porcentagem de aumento"))
let aumento = salario + (salario*porcentagemAumento)/100

alert ( " Parabéns, " + nomeFuncionario + ", agora este é seu salário: " + aumento )