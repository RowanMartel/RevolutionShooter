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
        this.active = true;
        this.sprite.visible = true;
        ;
        this.sprite.x = this.getRandomX();
        this.sprite.y = -10;
        this.targetX = this.getRandomX();
        this.targetY = this.getRandomY();
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
        let y = 0;
        do {
            y = Math.random() * Constants_1.STAGE_HEIGHT;
            if (y < 10)
                y = 10;
        } while (y > Constants_1.STAGE_HEIGHT / 3);
        return y;
    }
    update() {
        if (!this.active)
            return;
        this.move();
    }
    move() {
        if (this.sprite.x == this.targetX && this.sprite.y == this.targetY)
            return;
        this.angle = Math.atan2(this.targetY - this.sprite.y, this.targetX - this.sprite.x) * 180 / Math.PI;
        if (this.targetX - this.sprite.x < this.speed || this.targetY - this.sprite.y < this.speed)
            return;
        this.sprite.x += this.speed * Math.cos(this.angle);
        this.sprite.y += this.speed * Math.sin(this.angle);
    }
}
exports.Enemy = Enemy;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("58d1321f46f5b93cbe69")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.acd4810d0b5528bf5f9c.hot-update.js.map