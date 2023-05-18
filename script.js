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
        this.add.text(screenCenterX, screenCenterY - 100, 'Larry the Dinosaur', {fontSize: 30}).setOrigin(0.5).setTint(0x000000);
        this.add.text(screenCenterX, screenCenterY, 'Click to continue.').setOrigin(0.5).setTint(0x000000);
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('controls'));
        });
    }
}

class Controls extends Phaser.Scene {
    constructor() {
        super('controls');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(100, 50, 'Controls', {fontSize: 25}).setOrigin(0.5).setTint(0x000000);
        this.add.text(100, 100, 'Left/Right Arrowkey: Move right/left.').setTint(0x000000);
        this.add.text(100, 150, 'Up Arrowkey: Jump. Holding down key allows for every jump after to be a super jump!').setTint(0x000000);
        this.add.text(25, screenCenterY, 'Help Larry get home without being active! Dodge the soccer balls long enough to advance to the next level. Grabbing beer will make you immune to them for a few seconds! Good luck!').setTint(0x000000).setWordWrapWidth(1000);
        this.add.text(screenCenterX, screenCenterY + 100, 'Click to begin level one.').setOrigin(0.5).setTint(0x000000);
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('levelone'));
        });
    }
}

class Intro2 extends Phaser.Scene {
    constructor() {
        super('intro2');
    }
    create() {
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(100, 50, 'Great Job!', {fontSize: 25}).setOrigin(0.5).setTint(0x000000);
        this.add.text(50, 100, 'Level 2 Incoming!').setTint(0x000000);
        this.add.text(50, 175, "Time to last: 20 seconds").setTint(0x000000);
        this.add.text(50, 250, "Terrain: Grassland + island.").setTint(0x000000);
        this.add.text(50, 325, "Good luck!").setTint(0x000000);
        this.add.text(screenCenterX, screenCenterY, 'Click to begin level two.').setOrigin(0.5).setTint(0x000000);
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('leveltwo'));
        });
    }
}

class Intro3 extends Phaser.Scene {
    constructor() {
        super('intro3');
    }
    create() {
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(100, 50, 'Great Job!', {fontSize: 25}).setOrigin(0.5).setTint(0x000000);
        this.add.text(50, 100, 'Level 3 Incoming!').setTint(0x000000);
        this.add.text(50, 175, "Time to last: 20 seconds").setTint(0x000000);
        this.add.text(50, 250, "Terrain: Grassland + MORE islands!").setTint(0x000000);
        this.add.text(50, 325, "Good luck!").setTint(0x000000);
        this.add.text(screenCenterX, screenCenterY, 'Click to begin level three.').setOrigin(0.5).setTint(0x000000);
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('levelthree'));
        });
    }
}

class Ending extends Phaser.Scene {
    constructor() {
        super('ending');
    }
    create() {
        let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        this.add.text(25, screenCenterY - 100, 'Hooray! Larry has outlasted the evil soccer balls, and may now go back to his sedentary lifestyle.').setTint(0x000000);
        this.add.text(screenCenterX - 40, screenCenterY - 50, 'The End.').setTint(0x000000);
        this.add.text(screenCenterX, screenCenterY, 'Click to restart.').setOrigin(0.5).setTint(0x000000);
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('intro'));
        });
    }
}

class LevelOne extends Phaser.Scene {
    constructor() {
        super('levelone');
    }
    create() {
        const beer = this.physics.add.image(800, 500, 'beer').setScale(0.2);
        this.larry = this.physics.add.sprite(100, 500, 'larry').setScale(0.5);

        this.time.delayedCall(20000, () => this.scene.start('intro2'));
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 600, 'ground').setScale(2).refreshBody();

        this.larry.setCollideWorldBounds(true);

        this.balls = this.physics.add.group({
            key: 'ball',
            repeat: 6,
            setXY: { x: 300, y: 525, stepX: 150 },
            bounceX: 1,
            collideWorldBounds: true,
            velocityX: -100
            
        });
        for (const ball of this.balls.getChildren())
        {
            ball.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
            ball.setScale(0.1);
        }
        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.larry, this.platforms);
        this.physics.add.collider(this.platforms, this.balls);
        this.physics.add.collider(this.platforms, beer);
        const touchBall = this.physics.add.overlap(this.larry, this.balls, (larry, ball) =>
        {
            ball.disableBody(true, true);
            this.scene.start('levelone');
        });
        // when colliding with beer, become invulnerable
        this.physics.add.overlap(this.larry, beer, (larry, _beer) =>
        {
            touchBall.active = false;
            larry.setTintFill(0xffff00);
            _beer.destroy();
            this.time.delayedCall(5000, () =>
            {
                touchBall.active = true;
                larry.clearTint();
            });
        });
    }

    update ()
    {
        let jumptimer = 1;
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.larry.setVelocityX(-160);    
        }
        else if (right.isDown)
        {
            this.larry.setVelocityX(160);   
        }
        else
        {
            this.larry.setVelocityX(0);  
        }

// first jump is a small jump, jumps after by holding down up button are long jumps.

        if (up.isDown && this.larry.body.touching.down)
        {
            if(Phaser.Input.Keyboard.DownDuration(this.cursors.up, 150))
            {
                this.larry.setVelocityY(-300);
            }
            else 
            {
                this.larry.setVelocityY(-430);
            }
            
            //this.larry.setVelocityY(-330);
        } 
        
    }
}

class LevelTwo extends Phaser.Scene {
    constructor() {
        super('leveltwo');
    }
    create() {
        const beer = this.physics.add.image(800, 500, 'beer').setScale(0.2);
        this.larry = this.physics.add.sprite(100, 500, 'larry').setScale(0.5);
       
        this.time.delayedCall(20000, () => this.scene.start('intro3'));
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 600, 'ground').setScale(2).refreshBody();

        this.movingPlatform = this.physics.add.image(600, 200, 'ground').setScale(0.5);

        this.movingPlatform.setImmovable(true);
        this.movingPlatform.body.allowGravity = false;
        this.movingPlatform.setVelocityX(50);

        this.larry.setCollideWorldBounds(true);

        this.balls = this.physics.add.group({
            key: 'ball',
            repeat: 6,
            setXY: { x: 300, y: 125, stepX: 150 },
            bounceX: 1,
            collideWorldBounds: true,
            velocityX: -100
            
        });
        for (const ball of this.balls.getChildren())
        {
            ball.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
            ball.setScale(0.1);
        }
        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.larry, this.platforms);
        this.physics.add.collider(this.platforms, this.balls);
        this.physics.add.collider(this.platforms, beer);
        this.physics.add.collider(this.larry, this.movingPlatform);
        this.physics.add.collider(this.balls, this.movingPlatform);
        const touchBall = this.physics.add.overlap(this.larry, this.balls, (larry, ball) =>
        {
            ball.disableBody(true, true);
            this.scene.start('leveltwo');
        });
        this.physics.add.overlap(this.larry, beer, (larry, _beer) =>
        {
            touchBall.active = false;
            larry.setTintFill(0xffff00);
            _beer.destroy();
            this.time.delayedCall(5000, () =>
            {
                touchBall.active = true;
                larry.clearTint();
            });
        });
    }

    update ()
    {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.larry.setVelocityX(-160);    
        }
        else if (right.isDown)
        {
            this.larry.setVelocityX(160);   
        }
        else
        {
            this.larry.setVelocityX(0);  
        }

        if (up.isDown && this.larry.body.touching.down)
        {
            if(Phaser.Input.Keyboard.DownDuration(this.cursors.up, 150))
            {
                this.larry.setVelocityY(-300);
            }
            else 
            {
                this.larry.setVelocityY(-430);
            }
            
            //this.larry.setVelocityY(-330);
        }
        
        if (this.movingPlatform.x >= 600)
        {
            this.movingPlatform.setVelocityX(-50);
        }
        else if (this.movingPlatform.x <= 400)
        {
            this.movingPlatform.setVelocityX(50);
        }
    }
}

class LevelThree extends Phaser.Scene {
    constructor() {
        super('levelthree');
    }
    create() {
        this.platformOne = this.physics.add.image(800, 300, 'ground').setScale(0.5);
        this.platformOne.setImmovable(true);
        this.platformOne.body.allowGravity = false;

        this.platformTwo = this.physics.add.image(250, 250, 'ground').setScale(0.5);
        this.platformTwo.setImmovable(true);
        this.platformTwo.body.allowGravity = false;

        this.platformThree = this.physics.add.image(825, 200, 'ground').setScale(0.5);
        this.platformThree.setImmovable(true);
        this.platformThree.body.allowGravity = false;

        const beer = this.physics.add.image(800, 500, 'beer').setScale(0.2);
        this.larry = this.physics.add.sprite(100, 500, 'larry').setScale(0.5);
       
        this.time.delayedCall(20000, () => this.scene.start('ending'));
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 600, 'ground').setScale(2).refreshBody();

        this.larry.setCollideWorldBounds(true);

        this.balls = this.physics.add.group({
            key: 'ball',
            repeat: 6,
            setXY: { x: 300, y: 125, stepX: 150 },
            bounceX: 1,
            collideWorldBounds: true,
            velocityX: -100
            
        });
        for (const ball of this.balls.getChildren())
        {
            ball.setBounceY(Phaser.Math.FloatBetween(0.4, 0.5));
            ball.setScale(0.1);
        }
        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.larry, this.platforms);
        this.physics.add.collider(this.platforms, this.balls);
        this.physics.add.collider(this.platforms, beer);

        this.physics.add.collider(this.platformOne, this.balls);
        this.physics.add.collider(this.platformTwo, this.balls);
        this.physics.add.collider(this.platformThree, this.balls);

        this.physics.add.collider(this.platformOne, this.larry);
        this.physics.add.collider(this.platformTwo, this.larry);
        this.physics.add.collider(this.platformThree, this.larry);

        const touchBall = this.physics.add.overlap(this.larry, this.balls, (larry, ball) =>
        {
            ball.disableBody(true, true);
            this.scene.start('levelthree');
        });
        this.physics.add.overlap(this.larry, beer, (larry, _beer) =>
        {
            touchBall.active = false;
            larry.setTintFill(0xffff00);
            _beer.destroy();
            this.time.delayedCall(5000, () =>
            {
                touchBall.active = true;
                larry.clearTint();
            });
        });
    }

    update ()
    {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.larry.setVelocityX(-160);    
        }
        else if (right.isDown)
        {
            this.larry.setVelocityX(160);   
        }
        else
        {
            this.larry.setVelocityX(0);  
        }

        if (up.isDown && this.larry.body.touching.down)
        {
            if(Phaser.Input.Keyboard.DownDuration(this.cursors.up, 150))
            {
                this.larry.setVelocityY(-300);
            }
            else 
            {
                this.larry.setVelocityY(-430);
            }
            
            //this.larry.setVelocityY(-330);
        }
        
        
    }
}

new Phaser.Game({
    width: 1000,
    height: 600,
    backgroundColor: 0x9fc5e8,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: false
        }
    },
    scene: [Intro, Controls, LevelOne, Intro2, LevelTwo, Intro3, LevelThree, Ending],
});