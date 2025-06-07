
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function verificarChute() {
    const entrada = document.getElementById('entrada');
    const mensagem = document.getElementById('mensagem');
    const chute = Number(entrada.value);

    if (chute < 1 || chute > 100) {
        mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
        mensagem.style.color = "orange";
        return;
    }

    if (chute === numeroSecreto) {
        mensagem.textContent = "Parabéns! Você acertou o número secreto!";
        mensagem.style.color = "green";
    } else if (chute < numeroSecreto) {
        mensagem.textContent = "Tente um número maior.";
        mensagem.style.color = "blue";
    } else {
        mensagem.textContent = "Tente um número menor.";
        mensagem.style.color = "blue";
    }
}
