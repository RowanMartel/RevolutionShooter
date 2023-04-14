import { AssetManager } from "./AssetManager";
import { Bullet } from "./Bullet";
import { STAGE_HEIGHT, STAGE_WIDTH } from "./Constants";
import { Player } from "./Player";

export class Enemy
{
    // states
    public static STATE_MOVING:number = 0;
    public static STATE_ATTACKING:number = 1;

    // properties
    protected sprite:createjs.Sprite;
    protected stage:createjs.StageGL;
    protected assetManager:AssetManager;
    protected active:boolean;
    protected targetX:number;
    protected targetY:number;
    protected speed:number;
    protected angle:number;
    protected state:number;
    protected bullet:Bullet;
    protected player:Player;
    protected idleSprite:string;
    protected firingSprite:string;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, player:Player)
    {
        // initialization
        this.stage = stage;
        this.assetManager = assetManager;
        this.bullet = new Bullet(stage, assetManager, player, this);
    }

    protected reset():void
    {
        this.active = true;
        this.sprite.visible = true;;
        this.sprite.x = this.getRandomX();
        this.sprite.y = -50;
        this.targetX = this.getRandomX();
        this.targetY = this.getRandomY();
        this.state = Enemy.STATE_MOVING;
        this.sprite.gotoAndStop(this.idleSprite);
    }

    protected getRandomX():number
    {
        let x:number = Math.random() * STAGE_WIDTH;
        if (x < 10) x = 10;
        if (x > STAGE_WIDTH - 10) x = 10;
        return x;
    }
    protected getRandomY():number
    {
        let y:number = 0;

        while (y < STAGE_HEIGHT / 5)
        {
            y = STAGE_HEIGHT / 4
            y = Math.random() * (STAGE_HEIGHT / 4);
        }
        return y;
    }

    public update():void
    {
        this.bullet.update();
        if (!this.active) return;

        if (this.state == Enemy.STATE_MOVING)
            this.move();
        else if (this.state == Enemy.STATE_ATTACKING)
            this.attack();
    }

    protected move():void
    {
        if (this.state != Enemy.STATE_MOVING) return;
        if (this.sprite.x == this.targetX && this.sprite.y == this.targetY) return;

        this.angle = Math.atan2(this.targetY - this.sprite.y, this.targetX - this.sprite.x);

        if (Math.sqrt(Math.pow(this.targetY - this.sprite.y, 2) + Math.pow(this.targetX - this.sprite.x, 2)) < this.speed * 20)
        {
            this.state = Enemy.STATE_ATTACKING;
            return;
        }

        this.sprite.x += this.speed * Math.cos(this.angle);
        this.sprite.y += this.speed * Math.sin(this.angle);
    }

    protected attack():void
    {
        if (!this.bullet.Active)
        {
            this.bullet.fire();
            this.sprite.gotoAndPlay(this.firingSprite);
            this.sprite.on("animationend", () => 
            {
                this.sprite.gotoAndStop(this.idleSprite);
            }, this, true);
        }
    }

    get Sprite():createjs.Sprite
    {
        return this.sprite;
    }

    public getBullets():Bullet
    {
        return this.bullet;
    }
}