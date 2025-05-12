let notas;
let numNegativo
let i = 0
let soma = 0

do {
    notas = parseInt(prompt("Insira as notas"));
    if (notas >= 0 && notas <= 10 && !isNaN(notas)) {
        i++;
        soma += notas;
    }

} while (notas > 0);
alert(`a média das notas digitadas é: ${soma / i}`);