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
        this.sprite.y = 50;
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
        this.move();
    }
    move() {
        if (this.sprite.x == this.targetX && this.sprite.y == this.targetY)
            return;
        this.angle = Math.atan2(this.targetY - this.sprite.y, this.targetX - this.sprite.x) * 180 / Math.PI;
        if (Math.abs(Math.cos(this.angle)) < this.speed || Math.abs(Math.sin(this.angle)) < this.speed)
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
/******/ 	__webpack_require__.h = () => ("34d484e8ddba33b2d2e9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e4abe7f7e74a8bdf711b.hot-update.js.map