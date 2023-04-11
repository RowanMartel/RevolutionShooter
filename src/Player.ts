import { AssetManager } from "./AssetManager";
import { HEAD_POOL, PLAYER_SPEED, STAGE_HEIGHT, STAGE_WIDTH } from "./Constants";
import { Head } from "./Head";
import { InputManager } from "./InputManager";

export class Player
{
    // constants
    static LEFT:number = 1;
    static RIGHT:number = 2;
    static UP:number = 3;
    static DOWN:number = 4;
    static X:number = 1;
    static Y:number = 2;

    // properties
    private sprite:createjs.Sprite;
    private ammo:Head[];
    private speed:number;
    private stage:createjs.StageGL;
    private assetManager:AssetManager;
    private inputManager:InputManager;

    constructor (stage:createjs.StageGL, assetManager:AssetManager, inputManager:InputManager)
    {
        // initialization
        this.inputManager = inputManager;
        this.assetManager = assetManager;
        this.stage = stage;
        this.sprite = assetManager.getSprite("sprites", "Guillotine/Idle");
        this.sprite.scaleX = 2;
        this.sprite.scaleY = 2;
        this.reset();
        stage.addChild(this.sprite);
    }

    public reset():void
    {
        this.sprite.x = STAGE_WIDTH / 2 - 35;
        this.sprite.y = STAGE_HEIGHT * 0.8;
        this.ammo = [];
        for (let index = 0; index < HEAD_POOL; index++)
            this.ammo.push(new Head(this.stage, this.assetManager));
        this.speed = PLAYER_SPEED;
    }

    public update():void
    {
        if (this.inputManager.leftPressed) this.move(Player.LEFT);
        else if (this.inputManager.rightPressed) this.move(Player.RIGHT);
        if (this.inputManager.upPressed) this.move(Player.UP);
        else if (this.inputManager.downPressed) this.move(Player.DOWN);
    }

    get Sprite():createjs.Sprite
    {
        return this.sprite;
    }

    private move(direction:number):void
    {
        switch (direction)
        {
            case Player.LEFT:
                this.sprite.x -= this.speed;
                break;
            case Player.RIGHT:
                this.sprite.x += this.speed;
                break;
        }
        switch (direction)
        {
            case Player.UP:
                this.sprite.y -= this.speed;
                break;
            case Player.DOWN:
                this.sprite.y += this.speed;
                break;
        }
        this.clampPos();
    }
    private clampPos():void
    {
        if (this.sprite.x < -10) this.sprite.x = -10;
        else if (this.sprite.x > STAGE_WIDTH - 50) this.sprite.x = STAGE_WIDTH - 50;
        if (this.sprite.y < 0) this.sprite.y = 0;
        else if (this.sprite.y > STAGE_HEIGHT - 60) this.sprite.y = STAGE_HEIGHT - 60;
    }
}