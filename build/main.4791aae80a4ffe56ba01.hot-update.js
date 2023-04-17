"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Button.ts":
/*!***********************!*\
  !*** ./src/Button.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Button = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
class Button {
    constructor(stage, assetManager, restart) {
        if (restart) {
            this.button1 = "Other/button1";
            this.button2 = "Other/button2";
        }
        else {
            this.button1 = "Other/button3";
            this.button2 = "Other/button4";
        }
        this.sprite = assetManager.getSprite("sprites", this.button1);
        this.sprite.visible = false;
        this.sprite.x = Constants_1.STAGE_WIDTH / 2;
        if (restart) {
            this.sprite.y = Constants_1.STAGE_HEIGHT / 2;
        }
        else {
            this.sprite.y = Constants_1.STAGE_HEIGHT / 3;
        }
        stage.addChild(this.sprite);
        this.sprite.on("click", () => {
            this.sprite.gotoAndStop(this.button1);
            this.sprite.visible = false;
            (0, Game_1.reset)();
        });
        this.sprite.on("mouseout", () => this.sprite.gotoAndStop(this.button1));
        this.sprite.on("mousedown", () => this.sprite.gotoAndStop(this.button2));
    }
    enable() {
        this.sprite.visible = true;
    }
}
exports.Button = Button;


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reset = exports.gameOver = void 0;
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Background_1 = __webpack_require__(/*! ./Background */ "./src/Background.ts");
const Player_1 = __webpack_require__(/*! ./Player */ "./src/Player.ts");
const InputManager_1 = __webpack_require__(/*! ./InputManager */ "./src/InputManager.ts");
const ScoreTracker_1 = __webpack_require__(/*! ./ScoreTracker */ "./src/ScoreTracker.ts");
const EnemyManager_1 = __webpack_require__(/*! ./EnemyManager */ "./src/EnemyManager.ts");
const Button_1 = __webpack_require__(/*! ./Button */ "./src/Button.ts");
let stage;
let canvas;
let assetManager;
let background;
let player;
let inputManager;
let score;
let enemyManager;
let playButton;
let resetButton;
let gameActive;
function onReady(e) {
    console.log(">> all assets loaded – ready to add sprites to game");
    inputManager = new InputManager_1.InputManager(stage);
    background = new Background_1.Background(assetManager, stage);
    player = new Player_1.Player(stage, assetManager, inputManager);
    score = new ScoreTracker_1.ScoreTracker(stage, assetManager, player);
    enemyManager = new EnemyManager_1.EnemyManager(stage, assetManager, score, player);
    player.getEnemyManager(enemyManager);
    playButton = new Button_1.Button(stage, assetManager, false);
    resetButton = new Button_1.Button(stage, assetManager, true);
    score.goToFront();
    player.ammoGoToFront();
    gameActive = false;
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    background.update();
    stage.update();
    if (!gameActive)
        return;
    player.update();
    enemyManager.update();
}
function main() {
    console.log(">> game initialization");
    canvas = document.getElementById("game-canvas");
    canvas.width = Constants_1.STAGE_WIDTH;
    canvas.height = Constants_1.STAGE_HEIGHT;
    stage = new createjs.StageGL(canvas, { antialias: true });
    assetManager = new AssetManager_1.AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    assetManager.loadAssets(Constants_1.ASSET_MANIFEST);
}
function gameOver() {
    background.reset();
    enemyManager.reset();
    player.reset();
}
exports.gameOver = gameOver;
function reset() {
    background.reset();
    enemyManager.reset();
    player.reset();
    score.reset();
}
exports.reset = reset;
main();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("649f03e740419424fc2f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4791aae80a4ffe56ba01.hot-update.js.map