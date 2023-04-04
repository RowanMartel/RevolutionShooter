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
let stage;
let canvas;
let assetManager;
let background;
let player;
function onReady(e) {
    console.log(">> all assets loaded – ready to add sprites to game");
    background = new Background_1.Background(assetManager, stage);
    player = new Player_1.Player(stage, assetManager);
    createjs.Ticker.framerate = Constants_1.FRAME_RATE;
    createjs.Ticker.on("tick", onTick);
    console.log(">> game ready");
}
function onTick(e) {
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());
    background.update();
    stage.update();
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


/***/ }),

/***/ "./src/Head.ts":
/*!*********************!*\
  !*** ./src/Head.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Head = void 0;
class Head {
    constructor(stage, assetManager) {
    }
}
exports.Head = Head;


/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Head_1 = __webpack_require__(/*! ./Head */ "./src/Head.ts");
class Player {
    constructor(stage, assetManager) {
        this.sprite = assetManager.getSprite("sprites", "Guillotine/Idle");
        this.sprite.x = Constants_1.STAGE_WIDTH / 2;
        this.sprite.y = Constants_1.STAGE_HEIGHT * 0.8;
        stage.addChild(this.sprite);
        for (let index = 0; index < Constants_1.HEAD_POOL; index++)
            this.ammo.push(new Head_1.Head(stage, assetManager));
    }
}
exports.Player = Player;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("48a20878f9c0e7220851")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.57f958f427d742613362.hot-update.js.map