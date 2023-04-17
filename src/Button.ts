import { AssetManager } from "./AssetManager";
import { STAGE_HEIGHT, STAGE_WIDTH } from "./Constants";
import { reset } from "./Game";

export class Button
{
    // properties
    private sprite:createjs.Sprite;
    private button1:string;
    private button2:string;

    constructor(stage:createjs.StageGL, assetManager:AssetManager, restart:boolean)
    {
        if (restart)
        {
            this.button1 = "Misc/ResetUnpressed";
            this.button2 = "Misc/ResetPressed";
        }
        else
        {
            this.button1 = "Misc/PlayUnpressed";
            this.button2 = "Misc/PlayPressed";
        }

        this.sprite = assetManager.getSprite("sprites", this.button1);
        this.sprite.visible = false;
        this.sprite.x = STAGE_WIDTH / 2;
        
        if (restart)
            this.sprite.y = STAGE_HEIGHT / 2;
        else
            this.sprite.y = STAGE_HEIGHT / 3;

        stage.addChild(this.sprite);
        
        this.sprite.on("click", ()=> 
        {
            this.sprite.gotoAndStop(this.button1);
            this.sprite.visible = false;
            reset();
        });
        this.sprite.on("mouseout", ()=> this.sprite.gotoAndStop(this.button1));
        this.sprite.on("mousedown", ()=> this.sprite.gotoAndStop(this.button2));
    }

    public enable():void
    {
        this.sprite.visible = true;
    }
}