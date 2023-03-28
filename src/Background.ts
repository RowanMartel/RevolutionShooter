import { AssetManager } from "./AssetManager";

export class Background
{
    // class constants

    //properties
    private sprites:string[];
    private sprite1:createjs.Sprite;
    private sprite2:createjs.Sprite;

    constructor(assetManager:AssetManager, stage:createjs.StageGL)
    {
        //initialization

        this.sprites = ["Background1","Background2"];
        this.sprite1 = assetManager.getSprite("background", "Background1");
        this.sprite2 = assetManager.getSprite("background", "Background2");
        stage.addChild(this.sprite1);
        stage.addChild(this.sprite2);
        this.reset();
    }

    public reset():void
    {
        this.sprite1.x = 0;
        this.sprite1.y = 0;
        this.sprite2.x = 0;
        this.sprite2.y = -480;
        this.sprite1.gotoAndStop(this.sprites[Math.floor(Math.random() * this.sprites.length)]);
        this.sprite2.gotoAndStop(this.sprites[Math.floor(Math.random() * this.sprites.length)]);
    }

    public update():void
    {
        this.sprite1.y += 4;
        this.sprite2.y += 4;
        
        if (this.sprite1.y >= 480) this.goToTop(this.sprite1);
        else if (this.sprite2.y >= 480) this.goToTop(this.sprite2);
    }

    private goToTop(sprite:createjs.Sprite):void
    {
        sprite.y = -480;
        sprite.gotoAndStop(this.sprites[Math.floor(Math.random() * this.sprites.length)]);
    }
}