const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Configurações dos jogadores
const team1 = {
    color: 'blue',
    player: { x: 100, y: 340, width: 20, height: 40, dx: 0, dy: 0 }
};

const team2 = {
    color: 'red',
    player: { x: 1160, y: 340, width: 20, height: 40, dx: 0, dy: 0 }
};

// Função para desenhar a quadra
function drawCourt() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
}

// Função para desenhar os jogadores
function drawPlayer(player, color) {
    ctx.fillStyle = color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Função para limpar a tela
function clearCanvas() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Função para atualizar a posição dos jogadores
function updatePlayerPosition(player) {
    player.x += player.dx;
    player.y += player.dy;

    // Limites dos jogadores dentro do canvas
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

// Função para mover os jogadores
function movePlayer(event) {
    const player1 = team1.player; // Jogador do time 1
    const player2 = team2.player; // Jogador do time 2

    switch(event.key) {
        // Controle do jogador do time 1 (WASD)
        case 'w':
            player1.dy = -5;
            break;
        case 's':
            player1.dy = 5;
            break;
        case 'a':
            player1.dx = -5;
            break;
        case 'd':
            player1.dx = 5;
            break;

        // Controle do jogador do time 2 (Setas)
        case 'ArrowUp':
            player2.dy = -5;
            break;
        case 'ArrowDown':
            player2.dy = 5;
            break;
        case 'ArrowLeft':
            player2.dx = -5;
            break;
        case 'ArrowRight':
            player2.dx = 5;
            break;
    }
}

// Função para parar o movimento dos jogadores
function stopPlayer(event) {
    const player1 = team1.player;
    const player2 = team2.player;

    switch(event.key) {
        // Parar o jogador do time 1
        case 'w':
        case 's':
            player1.dy = 0;
            break;
        case 'a':
        case 'd':
            player1.dx = 0;
            break;

        // Parar o jogador do time 2
        case 'ArrowUp':
        case 'ArrowDown':
            player2.dy = 0;
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            player2.dx = 0;
            break;
    }
}

// Função para atualizar o jogo
function updateGame() {
    clearCanvas();
    drawCourt();
    updatePlayerPosition(team1.player);
    updatePlayerPosition(team2.player);
    drawPlayer(team1.player, team1.color);
    drawPlayer(team2.player, team2.color);
    requestAnimationFrame(updateGame);
}

// Adiciona eventos de teclado
document.addEventListener('keydown', movePlayer);
document.addEventListener('keyup', stopPlayer);

// Inicia o loop do jogo
updateGame();
