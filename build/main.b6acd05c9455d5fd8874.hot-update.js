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
    constructor(assetManager) {
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
/******/ 	__webpack_require__.h = () => ("83cb2ed8c9817a3e1aa5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b6acd05c9455d5fd8874.hot-update.js.map