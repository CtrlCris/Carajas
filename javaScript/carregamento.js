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
