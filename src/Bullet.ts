import { AssetManager } from "./AssetManager";
import { STAGE_HEIGHT, STAGE_WIDTH } from "./Constants";
import { Enemy } from "./Enemy";
import { Player } from "./Player";

export class Bullet
{
    // properties
    private sprite:createjs.Sprite;
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private active:boolean;
    private player:Player;
    private enemy:Enemy;
    private angle:number;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, player:Player, enemy:Enemy)
    {
        // initialization
        this.stage = stage;
        this.assetManager = assetManager;
        this.player = player;
        this.enemy = enemy;
        this.sprite = assetManager.getSprite("sprites", "Misc/Bullet");
        this.sprite.scaleX = 5;
        this.sprite.scaleY = 5;
        stage.addChild(this.sprite);
    }

    public reset():void
    {
        this.active = false;
        this.sprite.visible = false;
        this.sprite.x = this.enemy.Sprite.x + 25;
        this.sprite.y = this.enemy.Sprite.y + 40;
    }

    get Active():boolean
    {
        return this.active;
    }
    get Sprite():createjs.Sprite
    {
        return this.sprite;
    }

    public fire():void
    {
        this.sprite.x = this.enemy.Sprite.x + 25;
        this.sprite.y = this.enemy.Sprite.y + 40;
        this.angle = Math.atan2(this.player.HitBox.y - this.sprite.y, this.player.HitBox.x - this.sprite.x);
        this.active = true;
        this.sprite.visible = true;
    }

    public update():void
    {
        if (!this.active) return;
        this.sprite.x += 5 * Math.cos(this.angle);
        this.sprite.y += 5 * Math.sin(this.angle);
        this.rangeCheck();
    }

    private rangeCheck():void
    {
        if (this.sprite.x < -5) this.reset();
        else if (this.sprite.x > STAGE_WIDTH) this.reset();
        if (this.sprite.y < -5) this.reset();
        else if (this.sprite.y > STAGE_HEIGHT) this.reset();
    }
}