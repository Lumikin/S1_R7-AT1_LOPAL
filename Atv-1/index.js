let numPositivo;
let numNegativo
do {
    numPositivo = parseInt(prompt("Digite um numero positivo"));
    if (numPositivo > 0 && !isNaN(numPositivo)) {
        alert("O numero é positivo");
    }
    else if (numNegativo <= 0 || isNaN(numNegativo)) {
         alert("O numero é negativo");
    }
} while (numPositivo <= 0 || isNaN(numPositivo));

