document.addEventListener('DOMContentLoaded', () => {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gamePath = card.dataset.game;
            if (gamePath) {
                window.location.href = gamePath;
            }
        });
    });
});

