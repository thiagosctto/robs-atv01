document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("nomeInput");

    input.addEventListener("change", function() {
        const nome = input.value.trim();
        if (nome) {
            alert("Olá, " + nome + "!");
            input.value = ""; 
        }
    });
});