class BombManager {
    constructor(scene) {
        this.scene = scene;
        this.bombs = scene.physics.add.group();
    }

    spawnBomb(playerX) {
        const x = playerX + Phaser.Math.Between(-30, 30);
        const bomb = this.bombs.create(x, 0, 'bomb');
        bomb.setVelocityY(GameConfig.BOMB_SPEED);
        bomb.setCollideWorldBounds(true);
    }

    cleanup() {
        this.bombs.children.iterate((child) => {
            if (child && child.body && child.body.blocked.down) {
                child.disableBody(true, true);
            }
        });
    }

    getGroup() {
        return this.bombs;
    }
}
