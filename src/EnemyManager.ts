import { AssetManager } from "./AssetManager";
import { BasicEnemy } from "./BasicEnemy";
import { Bullet } from "./Bullet";
import { ENEMY_POOL, FLAG_POOL } from "./Constants";
import { Enemy } from "./Enemy";
import { Player } from "./Player";
import { ScoreTracker } from "./ScoreTracker";
import { randomMe } from "./Toolkit";
import { WhiteFlag } from "./WhiteFlag";

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
    private player:Player;
    private flags:WhiteFlag[];

    constructor(stage:createjs.StageGL, assetManager:AssetManager, score:ScoreTracker, player:Player)
    {
        // initialization
        this.stage = stage;
        this.assetManager = assetManager;
        this.score = score;
        this.player = player;
        this.flags = [];
        this.enemies = [];
        for (let index = 0; index < ENEMY_POOL; index++)
        {
            this.enemies[index] = new BasicEnemy(stage, assetManager, player, this, score); 
            this.enemies[index].reset();
            for (let index2 = 0; index2 < this.enemies[index].getBullets().length; index2++)
                this.enemies[index].getBullets()[index2].reset();
        }
        for (let index = 0; index < FLAG_POOL; index++)
            this.flags.push(new WhiteFlag(stage, assetManager, player, score));
        this.reset();
    }

    public reset():void
    {
        for (let index = 0; index < ENEMY_POOL; index++)
        { 
            this.enemies[index].reset();
            for (let index2 = 0; index2 < this.enemies[index].getBullets().length; index2++)
                this.enemies[index].getBullets()[index2].reset();
        }
        for (let index = 0; index < this.flags.length; index++)
        {
            this.flags[index].reset();
        }
        this.enemies[0].activate();
    }

    public update():void
    {
        for (let index = 0; index < this.enemies.length; index++) 
        {
            this.enemies[index].update();
        }
        for (let index = 0; index < this.flags.length; index++) 
        {
            this.flags[index].update();
        }
        this.spawnEnemy();
    }

    private spawnEnemy():void
    {
        if (randomMe(1, 200) > 198 - (this.score.KillCount / 10 + 1))
        {
            for (let index = 0; index < this.enemies.length; index++)
            {
                if (!this.enemies[index].Active)
                {
                    this.enemies[index].activate();
                    break;
                }
            }
        }
    }

    public getBullets():Bullet[]
    {
        let bullets:Bullet[] = [];
        for (let index1 = 0; index1 < this.enemies.length; index1++)
        {
            for (let index2 = 0; index2 < this.enemies[index2].getBullets().length; index2++)
            {
                let currentBullet = this.enemies[index1].getBullets()[index2]
                if (currentBullet.Active) bullets.push(currentBullet);
            }
        }
        return bullets;
    }

    get Enemies():Enemy[]
    {
        return this.enemies;
    }

    public spawnFlag(x:number, y:number):void
    {
        for (let index = 0; index < this.flags.length; index++)
        {
            if (this.flags[index].Available)
            {
                this.flags[index].activate(x, y);
                break;
            }
        }
    }
}