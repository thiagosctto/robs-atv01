document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("trocar-cor");
    
    botao.addEventListener("click", function() {
        const mainContent = document.querySelector(".main-content");

        if (mainContent.id === "color01") {
            mainContent.id = "color02";
        } else {
            mainContent.id = "color01";
        }
    });
});