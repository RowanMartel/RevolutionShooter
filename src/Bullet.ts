import { AssetManager } from "./AssetManager";

export class Bullet
{
    // properties
    private sprite:createjs.Sprite;
    private stage:createjs.StageGL;
    private assetManager:AssetManager;

    constructor (stage:createjs.StageGL, assetManager:AssetManager)
    {
        // initialization
        this.stage = stage;
        this.assetManager = assetManager;
    }
}