import { kill } from "process";

export class ScoreTracker
{
    // properties
    private killCount:number;
    private score:number;

    constructor ()
    {
        this.reset();
    }

    public reset():void
    {
        this.score = 0;
        this.killCount = 0;
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
        this.score += points;
    }
}