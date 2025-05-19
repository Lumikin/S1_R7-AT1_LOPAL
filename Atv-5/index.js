let saldo = 10000
let valor;
let i = 0;
do {
    valor = parseFloat(prompt("Digite o valor que deseja retirar. Saldo: 10000"));
    if (isNaN(saldo) && ) {
        alert("Valor incorreto")
    } else {
        valor = prompt("Digite o Valor")
        if (isNaN(valor)) {
            alert("Valor invalido!")
        }
    }
} while (!isNaN(saldo) || !isNaN(valor));
if (valor >= saldo) {
    alert(`Seu saldo é invalido`)
}
else {
alert(`transferencia concluida`)
}