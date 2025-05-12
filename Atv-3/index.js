let Valor;
let i = 0;
let soma = 0;

do {
    Valor = parseFloat(prompt("Digite os valores da compra, digite 0 para revelar o total"))
    if (Valor > 0 && !isNaN(Valor)) {
        i++;
        soma += Valor;
    }
    else if (Valor < 0 || isNaN(Valor)) {
        alert("Numero invalido")
    }
} while (Valor != 0 || isNaN(Valor) );
alert(`O total da compra é ${soma}`)