import { AssetManager } from "./AssetManager";
import { Player } from "./Player";
import { ScoreTracker } from "./ScoreTracker";
import { boxHit, boxHitTransformed } from "./Toolkit";

export class WhiteFlag
{
    // properties
    private assetManager:AssetManager;
    private stage:createjs.StageGL;
    private sprite:createjs.Sprite;
    private available:boolean;
    private player:Player;
    private score:ScoreTracker;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, player:Player, score:ScoreTracker)
    {
        this.score = score;
        this.player = player;
        this.assetManager = assetManager;
        this.stage = stage;
        this.sprite = assetManager.getSprite("sprites", "Misc/WhiteFlag");
        this.sprite.scaleX = 3;
        this.sprite.scaleY = 3;
        stage.addChild(this.sprite);
        this.reset();
    }

    public reset():void
    {
        this.available = true;
        this.sprite.visible = false;
    }

    public activate(x:number, y:number):void
    {
        this.available = false;
        this.sprite.visible = true;
        this.sprite.x = x;
        this.sprite.y = y;
    }

    public update():void
    {
        if (this.available) return;
        this.sprite.y += 5;
        this.collectCheck();
    }

    private collectCheck():void
    {
        if (boxHitTransformed(this.sprite, this.player.Sprite))
        {
            this.player.getAmmo();
            this.score.addPoints(1);
            this.reset();
        }
    }

    get Available():boolean
    {
        return this.available;
    }
}