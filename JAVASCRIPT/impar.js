function parOuImpar() {
  let numero = prompt("Digite um número:");

  if (numero % 2 === 0) {
    console.log("O número " + numero + " é Par!");
  } else {
    console.log("O número " + numero + " é Ímpar!");
  }
}

parOuImpar();
