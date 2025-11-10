class StarManager {
    constructor(scene) {
        this.scene = scene;
        this.stars = scene.physics.add.group();
        this.createStars();
    }

    createStars() {
        const starPositions = [
            { x: 300, y: 50 },
            { x: 400, y: 500 },
            { x: 500, y: 50 },
            { x: 550, y: 500 },
            { x: 650, y: 350 },
            { x: 150, y: 180 },
            { x: 250, y: 500 },
            { x: 700, y: 80 },
            { x: 800, y: 80 },
            { x: 100, y: 500 },
            { x: 20, y: 20 },
            { x: 750, y: 500 }
        ];

        starPositions.forEach(pos => {
            const star = this.stars.create(pos.x, pos.y, 'star');
            star.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
            star.setCollideWorldBounds(true);
        });
    }

    collectStar(star) {
        star.disableBody(true, true);
    }

    respawnStars() {
        if (this.stars.countActive(true) === 0) {
            this.stars.children.iterate((child) => {
                child.enableBody(true, child.x, child.y, true, true);
            });
        }
    }

    getGroup() {
        return this.stars;
    }

    countActive() {
        return this.stars.countActive(true);
    }
}
