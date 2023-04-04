import { AssetManager } from "./AssetManager";
import { Enemy } from "./Enemy";
import { randomMe } from "./Toolkit";

export class BasicEnemy extends Enemy
{
    constructor(stage:createjs.StageGL, assetManager:AssetManager)
    {
        // initialization
        super(stage, assetManager);
        this.sprite = assetManager.getSprite("sprites", "Enemies/RoyalistIdle");
        this.sprite.scaleX = 3;
        this.sprite.scaleY = 3;
        this.speed = randomMe(3, 5);
        this.reset();
        this.stage.addChild(this.sprite);
    }
}