"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bullet.ts":
/*!***********************!*\
  !*** ./src/Bullet.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bullet = void 0;
class Bullet {
    constructor(stage, assetManager, player, enemy) {
        this.stage = stage;
        this.assetManager = assetManager;
        this.player = player;
        this.enemy = enemy;
    }
    reset() {
        this.active = false;
        this.sprite.visible = false;
    }
    get Active() {
        return this.active;
    }
    fire() {
        this.active = true;
        this.sprite.x = this.enemy.Sprite.x;
        this.sprite.y = this.enemy.Sprite.y;
    }
}
exports.Bullet = Bullet;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8dff945e0dd340133082")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2d5d3b119c7eaad2f9d0.hot-update.js.map