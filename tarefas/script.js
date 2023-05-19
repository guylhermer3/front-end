const formulario = document.querySelector("#formulario");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const curso = document.querySelector("#curso");
const atendimento = document.querySelector("#atendimento");
const termos = document.querySelector("#termos");

formulario.addEventListener("submit", e => {
    e.preventDefault();

    // Imprimindo no console
    // console.log(nome.value);
    // console.log(email.value);

    const inscricao = {
        nome: nome.value,
        email: email.value,
        curso: curso.value,
        atendimento: atendimento.value,
        termos: termos.checked
    }

    console.log(inscricao);

    // Limpando o campo
    nome.value = "";
    email.value = "";
    atendimento.value = "";
    curso.selectedIndex = 0;    // Seleciona o 1 item da lista
    termos.checked = false;

    // Redirecionando o focus
    nome.focus();
});











/*
Botão
const mensagem = document.querySelector("#mensagem");

mensagem.addEventListener("mouseover", e => {
    console.log("Passou o mouse no botão");
});

mensagem.addEventListener("click", e => {
    alert("Clicou no botão!");
}); 
*/
