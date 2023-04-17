import { AssetManager } from "./AssetManager";
import { Enemy } from "./Enemy";
import { EnemyManager } from "./EnemyManager";
import { Player } from "./Player";
import { radiusHit } from "./Toolkit";

export class Head
{
    // properties
    private sprite:createjs.Sprite;
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private available:boolean;
    private player:Player;
    private enemyManager:EnemyManager;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, player:Player)
    {
        this.player = player;
        this.stage = stage;
        this.assetManager = assetManager;
        this.sprite = assetManager.getSprite("sprites", "Misc/Head");
        this.sprite.scaleX = 2;
        this.sprite.scaleY = 2;
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

    public update():void
    {
        if (this.available) return;

        this.sprite.y -= 20;
        this.checkHit();
        this.checkBounds();
    }

    private checkBounds():void
    {
        if (this.sprite.y < -5) this.reset();
    }

    private checkHit():void
    {
        let enemies:Enemy[] = this.enemyManager.Enemies;
        for (let index = 0; index < enemies.length; index++)
        {
            if (enemies[index].Active && radiusHit(this.sprite, 5, enemies[index].Sprite, 15))
            {
                //this.reset();
                enemies[index].die();
                //break;
            }
        }
    }

    public getEnemyManager(enemyManager:EnemyManager):void
    {
        this.enemyManager = enemyManager;
    }
}