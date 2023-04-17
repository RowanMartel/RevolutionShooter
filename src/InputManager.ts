export class InputManager
{
    // input bools
    public leftPressed:boolean;
    public rightPressed:boolean;
    public upPressed:boolean;
    public downPressed:boolean;
    public spacePressed:boolean;
    public shiftPressed:boolean;

    constructor (stage:createjs.StageGL)
    {
        this.leftPressed = false;
        this.rightPressed = false;
        this.upPressed = false;
        this.downPressed = false;
        this.spacePressed = false;
        this.shiftPressed = false

        // document.onkeydown = this.keyLogDown;
        document.onkeydown = (keyEvent:KeyboardEvent):void => this.keyLogDown(keyEvent);
        document.onkeyup = (keyEvent:KeyboardEvent):void => this.keyLogUp(keyEvent);
    }

    private keyLogDown(keyEvent:KeyboardEvent):void
    {
        switch (keyEvent.key)
        {
            case "a":
            case "A":
            case "ArrowLeft":
                this.leftPressed = true;
                this.rightPressed = false;
                break;
            case "d":
            case "D":
            case "ArrowRight":
                this.rightPressed = true;
                this.leftPressed = false;
                break;
            case "w":
            case "W":
            case "ArrowUp":
                this.upPressed = true;
                this.downPressed = false;
                break;
            case "s":
            case "S":
            case "ArrowDown":
                this.downPressed = true;
                this.upPressed = false;
                break;
            case "Shift":
                this.shiftPressed = true;
                break;
            case " ":
                this.spacePressed = true;
                break;
        }
    }

    private keyLogUp(keyEvent:KeyboardEvent):void
    {
        switch (keyEvent.key)
        {
            case "a":
            case "A":
            case "ArrowLeft":
                this.leftPressed = false;
                break;
            case "d":
            case "D":
            case "ArrowRight":
                this.rightPressed = false;
                break;
            case "w":
            case "W":
            case "ArrowUp":
                this.upPressed = false;
                break;
            case "s":
            case "S":
            case "ArrowDown":
                this.downPressed = false;
                break;
            case "Shift":
                this.shiftPressed = false;
                break;
            case " ":
                this.spacePressed = false;
                break;
        }
    }
}