document.addEventListener('DOMContentLoaded', function() {
    const square = document.getElementById('square');
    const changeColorBtn = document.getElementById('changeColorBtn');

    // Adiciona um listener de evento ao botão
    changeColorBtn.addEventListener('click', function() {
        // Gera valores de cor RGB aleatórios
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        // Cria a string da cor RGB
        const randomColor = `rgb(${red}, ${green}, ${blue})`;

        // Altera a cor de fundo do quadrado
        square.style.backgroundColor = randomColor;
    });
});