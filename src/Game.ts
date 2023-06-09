// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST } from "./Constants";
import { AssetManager } from "./AssetManager";
import { Background } from "./Background";
import { Player } from "./Player";
import { InputManager } from "./InputManager";
import { ScoreTracker } from "./ScoreTracker";
import { EnemyManager } from "./EnemyManager";
import { Button } from "./Button";

// game setup variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
let assetManager:AssetManager;

// game object variables
let background:Background;
let player:Player;
let inputManager:InputManager;
let score:ScoreTracker;
let enemyManager:EnemyManager;
let playButton:Button;
let resetButton:Button;
let controls:createjs.Sprite;

// other game variables
let gameActive:boolean;

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> all assets loaded – ready to add sprites to game");

    // construct game objects here
    inputManager = new InputManager(stage);
    background = new Background(assetManager, stage);
    player = new Player(stage, assetManager, inputManager);
    score = new ScoreTracker(stage, assetManager, player);
    enemyManager = new EnemyManager(stage, assetManager, score, player);
    player.getEnemyManager(enemyManager);
    playButton = new Button(stage, assetManager, false);
    resetButton = new Button(stage, assetManager, true);
    score.goToFront();
    player.ammoGoToFront();
    gameActive = false;
    playButton.enable();
    controls = assetManager.getSprite("sprites", "Misc/Controls", STAGE_WIDTH / 2, STAGE_HEIGHT / 2 );
    stage.addChild(controls);

    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");
}

function onTick(e:createjs.Event) {
    // displaying frames per second - comment this out when game is published
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // this is your game loop!
    background.update();


    // update the stage
    stage.update();

    if (!gameActive) return;
    player.update();
    enemyManager.update();
}

// --------------------------------------------------- main method
function main():void {
    console.log(">> game initialization");
    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;    

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });
    stage.enableMouseOver();

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);
}

// --------------------------------------------------- export functions
export function gameOver():void
{
    createjs.Sound.stop();
    createjs.Sound.play("gameOver");
    enemyManager.reset();
    player.reset();
    gameActive = false;
    resetButton.enable();
}

export function reset():void
{
    controls.visible = false;
    enemyManager.reset();
    player.reset();
    score.reset();
    gameActive = true;
    createjs.Sound.stop();
    createjs.Sound.play("start");
}

main();