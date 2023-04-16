import { AssetManager } from "./AssetManager";
import { Enemy } from "./Enemy";
import { EnemyManager } from "./EnemyManager";
import { Player } from "./Player";
import { ScoreTracker } from "./ScoreTracker";
import { randomMe } from "./Toolkit";

export class BasicEnemy extends Enemy
{
    constructor(stage:createjs.StageGL, assetManager:AssetManager, player:Player, enemyManager:EnemyManager, score:ScoreTracker)
    {
        // initialization
        super(stage, assetManager, player, enemyManager, score);
        this.sprite = assetManager.getSprite("sprites", "Enemies/RoyalistIdle");
        this.sprite.scaleX = 3;
        this.sprite.scaleY = 3;
        this.speed = randomMe(3, 5);
        this.idleSprite = "Enemies/RoyalistIdle";
        this.firingSprite = "Enemies/RoyalistFiring";
        this.reset();
        this.stage.addChild(this.sprite);
        for (let index = 0; index < this.bullets.length; index++)
        {
            this.bullets[index].reset();
        }
    }
}