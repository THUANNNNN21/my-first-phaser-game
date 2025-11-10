class GameConfig {
    static get config() {
        return {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            },
            scene: null // Will be set from main file
        };
    }

    static get PLAYER_SPEED() {
        return 160;
    }

    static get PLAYER_JUMP() {
        return -330;
    }

    static get BOMB_SPEED() {
        return 350;
    }
}
