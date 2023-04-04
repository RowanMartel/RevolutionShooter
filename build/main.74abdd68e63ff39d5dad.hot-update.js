"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Enemy.ts":
/*!**********************!*\
  !*** ./src/Enemy.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Enemy {
    constructor(stage, assetManager) {
        this.stage = stage;
        this.assetManager = assetManager;
    }
    reset() {
        this.sprite.visible = false;
        this.stage.addChild(this.sprite);
        this.sprite.x = this.getRandomX();
        this.sprite.y = this.getRandomY();
    }
    getRandomX() {
        let x = Math.random() * Constants_1.STAGE_WIDTH;
        if (x < 10)
            x = 10;
        if (x > Constants_1.STAGE_WIDTH - 10)
            x = 10;
        return x;
    }
    getRandomY() {
        let y;
        while (y > Constants_1.STAGE_HEIGHT / 3) {
            y = Math.random() * Constants_1.STAGE_HEIGHT;
            if (y < 10)
                y = 10;
        }
        return y;
    }
    update() {
        if (!this.active)
            return;
    }
}
exports.Enemy = Enemy;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("877158ecc4c881589497")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.74abdd68e63ff39d5dad.hot-update.js.map