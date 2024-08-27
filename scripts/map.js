document.querySelectorAll('.level').forEach(level => {
    level.addEventListener('click', function() {
        const levelNumber = this.getAttribute('data-level');
        // Redireciona para a tela de partida com a fase selecionada
        window.location.href = `game.html?level=${levelNumber}`;
    });
});

// Seleciona todas as divs com a classe 'level'
const levels = document.querySelectorAll('.level');

// Adiciona um evento de clique a cada uma dessas divs
levels.forEach(level => {
    level.addEventListener('click', () => {
        // Redireciona para o endereço especificado no atributo 'data-href'
        window.location.href = level.getAttribute('data-href');
    });
});
