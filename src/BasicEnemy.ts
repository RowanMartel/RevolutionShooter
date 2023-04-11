import { AssetManager } from "./AssetManager";
import { Enemy } from "./Enemy";
import { Player } from "./Player";
import { randomMe } from "./Toolkit";

export class BasicEnemy extends Enemy
{
    constructor(stage:createjs.StageGL, assetManager:AssetManager, player:Player)
    {
        // initialization
        super(stage, assetManager, player);
        this.sprite = assetManager.getSprite("sprites", "Enemies/RoyalistIdle");
        this.sprite.scaleX = 3;
        this.sprite.scaleY = 3;
        this.speed = randomMe(3, 5);
        this.idleSprite = "Enemies/RoyalistIdle";
        this.firingSprite = "Enemies/RoyalistFiring";
        this.reset();
        this.stage.addChild(this.sprite);
        this.bullet.reset();
    }
}