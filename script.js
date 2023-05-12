class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image("beer", "beer.png");
        this.load.image("ball", "soccer.png");
        this.load.image("larry", "dinosaur.png");
        this.load.image("ground", "ground.png");
    }
    create() {
        // center the text to the middle of the screen. code from https://www.stephengarside.co.uk/blog/phaser-3-center-text-in-middle-of-screen/
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(screenCenterX, screenCenterY, 'Click to begin.').setOrigin(0.5);
        /*this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('levelone'));
        });*/
    }
}

class LevelOne extends Phaser.Scene {
    constructor() {
        super('levelone');
    }
    // move to intro after getting your collision problem fixed.
    preload() {
        this.load.path = "./assets/";
        this.load.image("beer", "beer.png");
        this.load.image("ball", "soccer.png");
        this.load.image("larry", "dinosaur.png");
        this.load.image("ground", "ground.png");
    }
    create() {
        this.larry = this.physics.add.sprite(100, 350, 'larry');
        //this.larry.setBounce(0.2);
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 600, 'ground').setScale(2).refreshBody();

        this.larry.setCollideWorldBounds(true);
        this.physics.add.collider(this.larry, this.platforms);
    }
}

new Phaser.Game({
    width: 1000,
    height: 600,
    backgroundColor: 0x9fc5e8,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
    scene: [LevelOne, Intro],
});