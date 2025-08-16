document.addEventListener("DOMContentLoaded", function() {

    const botao = document.getElementById("trocar-img");
    
    botao.addEventListener("click", function() {
        const img = document.getElementById("img");

        if (img.src.includes("gato01.jpg")) {
            img.src = "./assets/gato02.jpg";
        } else if (img.src.includes("gato02.jpg")) {
            img.src = "./assets/gato03.jpg";
        } else {
            img.src = "./assets/gato01.jpg";
        }
    });
});