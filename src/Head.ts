import { AssetManager } from "./AssetManager";
import { Player } from "./Player";

export class Head
{
    // properties
    private sprite:createjs.Sprite;
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private available:boolean;
    private player:Player;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, player:Player)
    {
        this.player = player;
        this.stage = stage;
        this.assetManager = assetManager;
        this.sprite = assetManager.getSprite("sprites", "Misc/Head");
        stage.addChild(this.sprite);
        this.reset();
    }

    public reset():void
    {
        this.available = true;
        this.sprite.visible = false;
    }

    public fire():void
    {
        this.sprite.x = this.player.Sprite.x;
        this.sprite.y = this.player.Sprite.y;
        this.available = false;
        this.sprite.visible = true;
    }

    get Available():boolean
    {
        return this.available;
    }
}