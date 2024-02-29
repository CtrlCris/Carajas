//Após tala de carregamento, surgir tela indeex
document.addEventListener("DOMContentLoaded", function () {
    const loadingLine = document.getElementById('loading-line');
    const loadingScreen = document.querySelector('.loading-screen');
    const homeContent = document.querySelector('.home');

    // Adiciona um ouvinte de evento para detectar o fim da animação
    loadingLine.addEventListener('animationend', function () {
        // Esconde a tela de carregamento
        loadingScreen.style.display = 'none';

        // Mostra a tela principal
        homeContent.style.display = 'block';
    });

    // Simula o carregamento da página
    setTimeout(function () {
        // Oculta a tela principal inicialmente
        homeContent.style.display = 'none';

        // Revela a tela de carregamento
        loadingScreen.style.display = 'flex';

        // Esconde a tela de carregamento após o tempo de simulação
        setTimeout(function () {
            loadingScreen.style.display = 'none';
            homeContent.style.display = 'block';
        }, 3000); // Tempo de simulação em milissegundos
    }, 1000); // Tempo de simulação em milissegundos
});

//select das telas de produtos funcionáis
function redirecionarCategoria() {
    var select = document.getElementById("categoria");
    var selectedOption = select.options[select.selectedIndex].value;

    // Redirecionar apenas se uma opção válida foi selecionada
    if (selectedOption !== "escolha") {
        window.location.href = selectedOption;
    }
}

// Sprit Sheet dos produtos
function rotateImage(event, produto) {
    const card = event.currentTarget;
    const mouseX = event.clientX - card.getBoundingClientRect().left;

    // Ajuste conforme necessário para definir a largura de cada frame
    const larguraFrame = 100;

    // Calcula o índice do frame com base na posição do mouse
    const indiceFrame = Math.floor(mouseX / larguraFrame);

    // Calcula a posição de deslocamento da sprite sheet
    const deslocamento = -indiceFrame * larguraFrame;

    // Monta o caminho da sprite sheet para o produto específico
    const spriteSheetPath = `/img/Products/agua_fria/TuboPvcSoldável9M/sprite-sheet-${produto}.jpg`;

    // Aplica o deslocamento para alterar o frame exibido
    const imagemProduto = card.querySelector('img');
    imagemProduto.src = spriteSheetPath;
    imagemProduto.style.transform = `translateX(${deslocamento}px)`;
    
    // Adiciona uma classe para remover a transição durante o hover
    card.classList.add('no-transition');
}

// Adiciona evento para restaurar a transição quando o mouse sai do card
function restoreTransition(event) {
    const card = event.currentTarget;
    card.classList.remove('no-transition');
}






