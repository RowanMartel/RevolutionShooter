"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! createjs */ "./node_modules/createjs/builds/1.0.0/createjs.min.js");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const AssetManager_1 = __webpack_require__(/*! ./AssetManager */ "./src/AssetManager.ts");
const Background_1 = __webpack_require__(/*! ./Background */ "./src/Background.ts");
const Player_1 = __webpack_require__(/*! ./Player */ "./src/Player.ts");
const InputManager_1 = __webpack_require__(/*! ./InputManager */ "./src/InputManager.ts");
const ScoreTracker_1 = __webpack_require__(/*! ./ScoreTracker */ "./src/ScoreTracker.ts");
const EnemyManager_1 = __webpack_require__(/*! ./EnemyManager */ "./src/EnemyManager.ts");
let stage;
let canvas;
let assetManager;
let background;
let player;
let inputManager;
let score;
let enemyManager;
function onReady(e) {
    console.log(">> all assets loaded – ready to add sprites to game");
    score = new ScoreTracker_1.ScoreTracker(stage, assetManager);
    inputManager = new InputManager_1.InputManager(stage);
    background = new Background_1.Background(assetManager, stage);
    player = new Player_1.Player(stage, assetManager, inputManager);
    enemyManager = new EnemyManager_1.EnemyManager(stage, assetManager, score, player);
    player.getEnemyManager(enemyManager);
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    background.update();
    stage.update();
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
main();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1dc55bb9393c2fb2149a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4d64ef074bc75d6e9c85.hot-update.js.map