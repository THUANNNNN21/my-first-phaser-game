class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.gameOver = false;
    }

    preload() {
        this.loadAssets();
    }

    create() {
        this.initializeGame();
        this.setupInput();
    }

    update() {
        if (!this.gameOver) {
            this.player.handleMovement(this.cursors);
            this.bombManager.cleanup();
        }
        this.handleRestart();
    }

    loadAssets() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });
    }

    initializeGame() {
        this.add.image(400, 300, 'sky');

        this.platformManager = new PlatformManager(this);
        this.player = new Player(this, 750, 100);
        this.starManager = new StarManager(this);
        this.bombManager = new BombManager(this);
        this.uiManager = new UIManager(this);

        this.setupCollisions();
    }

    setupCollisions() {
        this.physics.add.collider(
            this.player.getSprite(),
            this.platformManager.getGroup()
        );

        this.physics.add.collider(
            this.starManager.getGroup(),
            this.platformManager.getGroup()
        );

        this.physics.add.collider(
            this.player.getSprite(),
            this.bombManager.getGroup(),
            this.handleBombHit,
            null,
            this
        );

        this.physics.add.overlap(
            this.player.getSprite(),
            this.starManager.getGroup(),
            this.handleStarCollect,
            null,
            this
        );
    }

    setupInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    handleStarCollect(playerSprite, star) {
        this.starManager.collectStar(star);
        this.uiManager.updateScore(1);
        this.starManager.respawnStars();
        this.bombManager.spawnBomb(this.player.getX());
    }

    handleBombHit(playerSprite, bomb) {
        this.physics.pause();
        this.player.onHitBomb();
        this.gameOver = true;
        this.uiManager.showGameOver();
    }

    handleRestart() {
        if (this.gameOver && this.cursors.space.isDown) {
            this.scene.restart();
            this.gameOver = false;
        }
    }
}
