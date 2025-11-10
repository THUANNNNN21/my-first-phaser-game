class PlatformManager {
    constructor(scene) {
        this.scene = scene;
        this.platforms = scene.physics.add.staticGroup();
        this.createPlatforms();
    }

    createPlatforms() {
        this.platforms.create(400, 600, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 425, 'ground');
        this.platforms.create(200, 250, 'ground');
        this.platforms.create(750, 150, 'ground');
    }

    getGroup() {
        return this.platforms;
    }
}
