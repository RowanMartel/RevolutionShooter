"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/ScoreTracker.ts":
/*!*****************************!*\
  !*** ./src/ScoreTracker.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScoreTracker = void 0;
class ScoreTracker {
    constructor(stage, assetManager, player) {
        this.player = player;
        this.assetManager = assetManager;
        this.stage = stage;
        this.score = 0;
        this.scoreText = new createjs.BitmapText(ScoreTracker.TITLE + this.score.toString(), assetManager.getSpriteSheet("glyphs"));
        this.scoreText.letterSpacing = 1;
        this.scoreText.x = 10;
        this.scoreText.y = 20;
        this.scoreText.scaleX = 1.5;
        this.scoreText.scaleY = 1.5;
        this.reset();
    }
    reset() {
        this.score = 0;
        this.killCount = 0;
    }
    get KillCount() {
        return this.killCount;
    }
    get Score() {
        return this.score;
    }
    addKill(points) {
        this.killCount++;
        this.addPoints(points);
    }
    addPoints(points) {
        this.score += points;
        this.scoreText.text = ScoreTracker.TITLE + this.score.toString();
        this.extraLifeCheck();
    }
    goToFront() {
        this.stage.addChild(this.scoreText);
    }
    extraLifeCheck() {
        if (this.score % 50 == 0)
            this.player.getLife();
    }
}
exports.ScoreTracker = ScoreTracker;
ScoreTracker.TITLE = "SCORE- ";


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("65d60d92ec824872e0b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5603911bf9a426a8c6bc.hot-update.js.map