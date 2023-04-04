import { AssetManager } from "./AssetManager";
import { STAGE_HEIGHT, STAGE_WIDTH } from "./Constants";

export class Enemy
{
    // properties
    protected sprite:createjs.Sprite;
    protected stage:createjs.StageGL;
    protected assetManager:AssetManager;
    protected active:boolean;
    protected targetX:number;
    protected targetY:number;
    protected speed:number;
    protected angle:number;

    constructor(stage:createjs.StageGL, assetManager:AssetManager)
    {
        // initialization
        this.stage = stage;
        this.assetManager = assetManager;
    }

    protected reset():void
    {
        this.active = true;
        this.sprite.visible = true;;
        this.sprite.x = this.getRandomX();
        this.sprite.y = 50;
        this.targetX = this.getRandomX();
        this.targetY = this.getRandomY();
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
        while (y > STAGE_HEIGHT / 3)
        {
            y = Math.random() * STAGE_HEIGHT;
            if (y < 10) y = 10;
        }
        return y;
    }

    public update():void
    {
        if (!this.active) return;

        this.move();
    }

    protected move():void
    {
        if (this.sprite.x == this.targetX && this.sprite.y == this.targetY) return;

        this.angle = Math.atan2(this.targetY - this.sprite.y, this.targetX - this.sprite.x) * 180 / Math.PI;

        if (this.targetX - this.sprite.x < this.speed || this.targetY - this.sprite.y < this.speed) return;

        this.sprite.x += this.speed * Math.cos(this.angle);
        this.sprite.y += this.speed * Math.sin(this.angle);
    }
}