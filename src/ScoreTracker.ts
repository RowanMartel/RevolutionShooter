import { AssetManager } from "./AssetManager";
import { Player } from "./Player";

export class ScoreTracker
{
    // class constants
    static TITLE:string = "SCORE- ";

    // properties
    private killCount:number;
    private score:number;
    private scoreText:createjs.BitmapText;
    private assetManager:AssetManager;
    private stage:createjs.StageGL;
    private player:Player;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, player:Player)
    {
        this.player = player;
        this.assetManager = assetManager;
        this.stage = stage;
        this.score = 0;
        this.scoreText = new createjs.BitmapText(ScoreTracker.TITLE + this.score.toString(), assetManager.getSpriteSheet("glyphs"));
        this.scoreText.letterSpacing = 1;
        this.scoreText.x = 15;
        this.scoreText.y = 35;
        this.scoreText.scaleX = 1.5;
        this.scoreText.scaleY = 1.5;
        this.reset();
    }

    public reset():void
    {
        this.score = 0;
        this.killCount = 0;
        this.scoreText.text = ScoreTracker.TITLE + this.score.toString();
    }

    get KillCount():number
    {
        return this.killCount;
    }
    get Score():number
    {
        return this.score;
    }

    public addKill(points:number):void
    {
        this.killCount++;
        this.addPoints(points);
    }

    public addPoints(points:number):void
    {
        this.score += points;
        this.scoreText.text = ScoreTracker.TITLE + this.score.toString();
        this.extraLifeCheck();
    }
    
    public goToFront():void
    {
        this.stage.addChild(this.scoreText);
    }

    private extraLifeCheck():void
    {
        if (this.score % 50 == 0) this.player.getLife();
    }
}