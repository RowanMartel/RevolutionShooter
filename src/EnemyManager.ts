import { AssetManager } from "./AssetManager";
import { BasicEnemy } from "./BasicEnemy";
import { ENEMY_POOL } from "./Constants";
import { Enemy } from "./Enemy";
import { ScoreTracker } from "./ScoreTracker";

export class EnemyManager
{
    // enemy type enum
    public static enemyTypes = 
    {
        basic: 0,
        tough: 1,
        horse: 2,
        royal: 3
    }

    // properties
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private score:ScoreTracker;
    private enemies:Enemy[];

    constructor(stage:createjs.StageGL, assetManager:AssetManager, score:ScoreTracker)
    {
        // initialization
        this.stage = stage;
        this.assetManager = assetManager;
        this.score = score;
        this.reset();
    }

    public reset():void
    {
        this.enemies = [];
        for (let index = 0; index < ENEMY_POOL; index++)
        {
            this.enemies[index] = this.determineEnemy();    
        }
    }

    private determineEnemy():Enemy
    {
        switch (this.score.KillCount)
        {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                return new BasicEnemy(this.stage, this.assetManager);
                break;
            default:
                return new BasicEnemy(this.stage, this.assetManager);
                break;
        }
    }

    public update():void
    {
        for (let index = 0; index < this.enemies.length; index++) 
        {
            this.enemies[index].update();
        }
    }
}