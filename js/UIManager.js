class UIManager {
    constructor(scene) {
        this.scene = scene;
        this.score = 0;
        this.createUI();
    }

    createUI() {
        this.scoreText = this.scene.add.text(16, 16, 'Score: 0', {
            fontSize: '32px',
            fill: '#000'
        });

        this.gameOverText = this.scene.add.text(400, 300, '', {
            fontSize: '64px',
            fill: '#f00'
        }).setOrigin(0.5);

        this.restartText = this.scene.add.text(400, 400, '', {
            fontSize: '32px',
            fill: '#00f'
        }).setOrigin(0.5);
    }

    updateScore(points) {
        this.score += points;
        this.scoreText.setText('Score: ' + this.score);
    }

    showGameOver() {
        this.gameOverText.setText('Game Over');
        this.restartText.setText('Click SPACE to Restart');
    }

    hideGameOver() {
        this.gameOverText.setText('');
        this.restartText.setText('');
    }

    resetScore() {
        this.score = 0;
        this.scoreText.setText('Score: 0');
    }

    getScore() {
        return this.score;
    }
}
