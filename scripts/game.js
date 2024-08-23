const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Configurações dos jogadores
const team1 = {
    color: 'blue',
    players: [
        { x: 100, y: 150, width: 20, height: 40, dx: 0, dy: 0 },
        { x: 150, y: 250, width: 20, height: 40, dx: 0, dy: 0 },
        // Adicione mais jogadores do time 1 se necessário
    ]
};

const team2 = {
    color: 'red',
    players: [
        { x: 600, y: 150, width: 20, height: 40, dx: 0, dy: 0 },
        { x: 650, y: 250, width: 20, height: 40, dx: 0, dy: 0 },
        // Adicione mais jogadores do time 2 se necessário
    ]
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
function drawPlayers(team) {
    team.players.forEach(player => {
        ctx.fillStyle = team.color;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    });
}

// Função para limpar a tela
function clearCanvas() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Função para atualizar a posição dos jogadores do time 1 (controlado)
function updatePlayerPosition(player) {
    player.x += player.dx;
    player.y += player.dy;

    // Limites dos jogadores dentro do canvas
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

// Função para mover o jogador do time 1
function movePlayer(event) {
    const player = team1.players[0]; // Controlando apenas o primeiro jogador do time 1
    switch(event.key) {
        case 'w':
            player.dy = -5;
            break;
        case 's':
            player.dy = 5;
            break;
        case 'a':
            player.dx = -5;
            break;
        case 'd':
            player.dx = 5;
            break;
    }
}

// Função para parar o movimento do jogador do time 1
function stopPlayer(event) {
    const player = team1.players[0];
    switch(event.key) {
        case 'w':
        case 's':
            player.dy = 0;
            break;
        case 'a':
        case 'd':
            player.dx = 0;
            break;
    }
}

// Função para atualizar o jogo
function updateGame() {
    clearCanvas();
    drawCourt();
    team1.players.forEach(updatePlayerPosition);
    drawPlayers(team1);
    drawPlayers(team2);
    requestAnimationFrame(updateGame);
}

// Adiciona eventos de teclado
document.addEventListener('keydown', movePlayer);
document.addEventListener('keyup', stopPlayer);

// Inicia o loop do jogo
updateGame();
