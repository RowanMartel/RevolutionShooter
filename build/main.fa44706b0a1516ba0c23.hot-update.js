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
    constructor(stage, assetManager) {
        this.stage = stage;
        this.scoreText = new createjs.BitmapText(ScoreTracker.TITLE + this.score.toString(), this.assetManager.getSpriteSheet("glyphs"));
        this.assetManager = assetManager;
        this.scoreText.letterSpacing = 1;
        this.scoreText.x = 10;
        this.scoreText.y = 10;
        this.scoreText.scaleX = 2;
        this.scoreText.scaleY = 2;
        this.reset();
    }
    reset() {
        this.score = 0;
        this.killCount = 0;
        this.scoreText = new createjs.BitmapText(ScoreTracker.TITLE + this.score.toString(), this.assetManager.getSpriteSheet("glyphs"));
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
    }
}
exports.ScoreTracker = ScoreTracker;
ScoreTracker.TITLE = "SCORE- ";


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca93b78aceec5d1b8460")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fa44706b0a1516ba0c23.hot-update.js.map