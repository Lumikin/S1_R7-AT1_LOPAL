let nome;
let sobrenome;
let nomeSobr;
do {
   nome = prompt("Digite o nome");
    if (nome = " " && !isNaN(nome) ) {
        alert("Nome incorreto")
   } else {
        sobrenome = prompt("Digite o seu sobrenome")
        if (sobrenome = " " && !isNaN(sobrenome)){
            alert("Sobrenome invalido!")
        }
   } 
} while (nome == " " && sobrenome == " " || !isNaN(nome)  || !isNaN(sobrenome));
    alert(`Seu nome é ${nome} ${sobrenome}`)