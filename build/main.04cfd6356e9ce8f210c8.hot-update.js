"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

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
let controls;
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
    playButton.enable();
    controls = assetManager.getSprite("sprites", "Misc/Controls", 0, 0);
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
    createjs.Sound.stop();
    createjs.Sound.play("gameOver");
    enemyManager.reset();
    player.reset();
    gameActive = false;
    resetButton.enable();
}
exports.gameOver = gameOver;
function reset() {
    createjs.Sound.stop();
    createjs.Sound.play("start");
    enemyManager.reset();
    player.reset();
    score.reset();
    gameActive = true;
}
exports.reset = reset;
main();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1666127f3c818166c1ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.04cfd6356e9ce8f210c8.hot-update.js.map