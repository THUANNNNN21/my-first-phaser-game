class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, 'dude');
        this.setupPhysics();
        this.createAnimations();
    }

    setupPhysics() {
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);
    }

    createAnimations() {
        this.scene.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('dude', { start: 6, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });
    }

    handleMovement(cursors) {
        if (cursors.left.isDown) {
            this.sprite.setVelocityX(-GameConfig.PLAYER_SPEED);
            this.sprite.anims.play('left', true);
        } else if (cursors.right.isDown) {
            this.sprite.setVelocityX(GameConfig.PLAYER_SPEED);
            this.sprite.anims.play('right', true);
        } else {
            this.sprite.setVelocityX(0);
            this.sprite.anims.play('turn');
        }

        if (cursors.up.isDown && this.sprite.body.touching.down) {
            this.sprite.setVelocityY(GameConfig.PLAYER_JUMP);
        }
    }

    onHitBomb() {
        this.sprite.setTint(0xff0000);
        this.sprite.anims.play('turn');
    }

    getSprite() {
        return this.sprite;
    }

    getX() {
        return this.sprite.x;
    }
}
