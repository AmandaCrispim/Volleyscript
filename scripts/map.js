document.querySelectorAll('.level').forEach(level => {
    level.addEventListener('click', function() {
        const levelNumber = this.getAttribute('data-level');
        // Redireciona para a tela de partida com a fase selecionada
        window.location.href = `game.html?level=${levelNumber}`;
    });
});
