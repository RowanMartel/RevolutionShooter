import { AssetManager } from "./AssetManager";
import { MAX_AMMO, MAX_LIVES, PLAYER_SPEED, STAGE_HEIGHT, STAGE_WIDTH, STARTING_AMMO, STARTING_LIVES } from "./Constants";
import { EnemyManager } from "./EnemyManager";
import { gameOver } from "./Game";
import { Head } from "./Head";
import { InputManager } from "./InputManager";
import { boxHitTransformed } from "./Toolkit";

export class Player
{
    // constants
    static LEFT:number = 1;
    static RIGHT:number = 2;
    static UP:number = 3;
    static DOWN:number = 4;
    static X:number = 1;
    static Y:number = 2;
    static TITLE:string = "AMMO- ";

    // properties
    private sprite:createjs.Sprite;
    private heads:Head[];
    private speed:number;
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private inputManager:InputManager;
    private lifeMarkers:createjs.Sprite[];
    private lives:number;
    private ammo:number;
    private ammoText:createjs.BitmapText;
    private enemyManager:EnemyManager;
    private inIFrames:boolean;
    private hitBox:createjs.Sprite;
    private canFire:boolean;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, inputManager:InputManager)
    {
        // initialization
        this.hitBox = assetManager.getSprite("sprites", "Misc/Hitbox");
        this.hitBox.scaleX = 4;
        this.hitBox.scaleY = 4;
        this.inputManager = inputManager;
        this.assetManager = assetManager;
        this.stage = stage;
        this.sprite = assetManager.getSprite("sprites", "Guillotine/Idle");
        this.sprite.scaleX = 2;
        this.sprite.scaleY = 2;
        this.heads = [];
        for (let index = 0; index < MAX_AMMO; index++)
            this.heads.push(new Head(this.stage, this.assetManager, this));
        this.ammo = 0;
        this.ammoText = new createjs.BitmapText(Player.TITLE + this.ammo.toString(), assetManager.getSpriteSheet("glyphs"));
        this.ammoText.letterSpacing = 1;
        this.ammoText.x = 15;
        this.ammoText.y = 65;
        this.ammoText.scaleX = 1.5;
        this.ammoText.scaleY = 1.5;
        this.lifeMarkers = [];
        for (let index = 0; index < MAX_LIVES; index++)
        {
            this.lifeMarkers.push(this.assetManager.getSprite("sprites", "Guillotine/Idle"));
            this.stage.addChild(this.lifeMarkers[index]);
            this.lifeMarkers[index].y = STAGE_HEIGHT - 33;
            this.lifeMarkers[index].x = 24 * index  + 15;
        }
        this.reset();
        stage.addChild(this.sprite);
        stage.addChild(this.hitBox);
    }

    public getEnemyManager(enemyManager:EnemyManager):void
    {
        this.enemyManager = enemyManager;
        for (let index = 0; index < this.heads.length; index++)
            this.heads[index].getEnemyManager(enemyManager);
    }

    public reset():void
    {
        this.hitBox.visible = false;
        this.canFire = true;
        this.inIFrames = false;
        this.sprite.x = STAGE_WIDTH / 2;
        this.sprite.y = STAGE_HEIGHT * 0.8;
        this.speed = PLAYER_SPEED;
        this.ammo = STARTING_AMMO;
        this.lives = STARTING_LIVES;
        this.sprite.gotoAndStop("Guillotine/IdlePrisoner");
        this.ammoText.text = Player.TITLE + this.ammo.toString();

        for (let index = 0; index < MAX_LIVES; index++)
        {
            if (index >= STARTING_LIVES - 1) this.lifeMarkers[index].visible = false;
            else this.lifeMarkers[index].visible = true;
        }
    }

    public update():void
    {
        if (this.inputManager.leftPressed)
        {
            if (this.inputManager.upPressed) this.move(Player.LEFT, Player.UP);
            else if (this.inputManager.downPressed) this.move(Player.LEFT, Player.DOWN);
            else this.move(Player.LEFT);
        }
        else if (this.inputManager.rightPressed)
        {
            if (this.inputManager.upPressed) this.move(Player.RIGHT, Player.UP);
            else if (this.inputManager.downPressed) this.move(Player.RIGHT, Player.DOWN);
            else this.move(Player.RIGHT);
        }
        else if (this.inputManager.upPressed)
        {
            if (this.inputManager.leftPressed) this.move(Player.UP, Player.LEFT);
            else if (this.inputManager.rightPressed) this.move(Player.UP, Player.RIGHT);
            else this.move(Player.UP);
        }
        else if (this.inputManager.downPressed)
        {
            if (this.inputManager.leftPressed) this.move(Player.DOWN, Player.LEFT);
            else if (this.inputManager.rightPressed) this.move(Player.DOWN, Player.RIGHT);
            else this.move(Player.DOWN);
        }

        if (this.isHit()) this.damage();
        this.hitboxMove();
        this.updateHitboxVisibility();
        if (this.inputManager.spacePressed) this.fire();

        for (let index = 0; index < this.heads.length; index++)
        {
            this.heads[index].update();
        }
    }

    private updateHitboxVisibility():void
    {
        if (this.inputManager.shiftPressed) this.hitBox.visible = true;
        else this.hitBox.visible = false;
    }

    private hitboxMove():void
    {
        this.hitBox.x = this.sprite.x;
        this.hitBox.y = this.sprite.y;
    }

    private isHit():boolean
    {
        let bullets = this.enemyManager.getBullets()
        for (let index = 0; index < bullets.length; index++)
        {
            if (boxHitTransformed(this.hitBox, bullets[index].Sprite)) return true;
        }
        return false;
    }

    private damage():void
    {
        if (this.inIFrames) return;

        if (this.lives > 1) this.lifeMarkers[this.lives - 2].visible = false;
        this.lives--;
        if (this.lives <= 0)
        {
            gameOver();
            return;
        }
        this.enterIFrames();
        createjs.Sound.play("playerHit");
    }

    private enterIFrames():void
    {
        this.inIFrames = true;
        let flashes:number = 0;
        this.sprite.visible = false;
        let flashInterval = setInterval(() => 
        {
            if (flashes == 5)
            {
                clearInterval(flashInterval);
                this.inIFrames = false;
                return;
            }
            if (this.sprite.visible) this.sprite.visible = false;
            else this.sprite.visible = true;
            flashes++;
        }, 300);
    }

    get Sprite():createjs.Sprite
    {
        return this.sprite;
    }
    get HitBox():createjs.Sprite
    {
        return this.hitBox;
    }

    private move(direction1:number, direction2:number = 0):void
    {
        let speed:number;
        if (this.inputManager.shiftPressed) speed = this.speed / 2;
        else speed = this.speed;

        switch (direction1)
        {
            case Player.LEFT:
                if (direction2 == Player.UP)
                {
                    this.sprite.x -= speed * 0.707;
                    this.sprite.y -= speed * 0.707;
                }
                else if (direction2 == Player.DOWN)
                {
                    this.sprite.x -= speed * 0.707;
                    this.sprite.y += speed * 0.707;
                }
                else this.sprite.x -= speed;
                break;
            case Player.RIGHT:
                if (direction2 == Player.UP)
                {
                    this.sprite.x += speed * 0.707;
                    this.sprite.y -= speed * 0.707;
                }
                else if (direction2 == Player.DOWN)
                {
                    this.sprite.x += speed * 0.707;
                    this.sprite.y += speed * 0.707;
                }
                else this.sprite.x += speed;
                break;
            case Player.UP:
                if (direction2 == Player.LEFT)
                {
                    this.sprite.x -= speed * 0.707;
                    this.sprite.y -= speed * 0.707;
                }
                if (direction2 == Player.RIGHT)
                {
                    this.sprite.x += speed * 0.707;
                    this.sprite.y -= speed * 0.707;
                }
                else this.sprite.y -= speed;
                break;
                case Player.DOWN:
                    if (direction2 == Player.LEFT)
                    {
                        this.sprite.x -= speed * 0.707;
                        this.sprite.y += speed * 0.707;
                    }
                    if (direction2 == Player.RIGHT)
                    {
                        this.sprite.x += speed * 0.707;
                        this.sprite.y += speed * 0.707;
                    }
                    else this.sprite.y += speed;
                    break;
        }

        this.clampPos();
    }

    private clampPos():void
    {
        if (this.sprite.x < 15) this.sprite.x = 15;
        else if (this.sprite.x > STAGE_WIDTH - 20) this.sprite.x = STAGE_WIDTH - 20;
        if (this.sprite.y < 25) this.sprite.y = 25;
        else if (this.sprite.y > STAGE_HEIGHT - 30) this.sprite.y = STAGE_HEIGHT - 30;
    }

    private fire():void
    {
        if (!this.canFire || this.ammo <= 0) return;
        
        this.ammo--;
        this.ammoText.text = Player.TITLE + this.ammo.toString();
        
        for (let index = 0; index < this.heads.length; index++)
        {
            if (this.heads[index].Available)
            {
                this.heads[index].fire();
                break;
            }
        }

        this.canFire = false;
        setTimeout(() => {
            this.canFire = true;    
        }, 500);

        this.sprite.gotoAndPlay("Guillotine/ChopHead");
        this.sprite.on("animationend", () => 
        {
            if (this.ammo > 0) this.sprite.gotoAndStop("Guillotine/IdlePrisoner");
            else this.sprite.gotoAndStop("Guillotine/Idle");
        }, this, true);
        createjs.Sound.play("behead");
    }

    public getAmmo():void
    {
        if (this.ammo < MAX_AMMO) this.ammo++;
        this.ammoText.text = Player.TITLE + this.ammo.toString();
        if (this.sprite.currentAnimation != "Guillotine/ChopHead")
        {
            if (this.ammo > 0) this.sprite.gotoAndStop("Guillotine/IdlePrisoner");
            else this.sprite.gotoAndStop("Guillotine/Idle");
        }
    }

    public getLife():void
    {
        this.lifeMarkers[this.lives - 1].visible = true;
        this.lives++;
        createjs.Sound.play("extraLife");
    }
    
    public ammoGoToFront():void
    {
        this.stage.addChild(this.ammoText);
    }
}