"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Enemy.ts":
/*!**********************!*\
  !*** ./src/Enemy.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
class Enemy {
    constructor(stage, assetManager) {
        this.stage = stage;
        this.assetManager = assetManager;
    }
    reset() {
        this.sprite.visible = false;
        this.stage.addChild(this.sprite);
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
/******/ 	__webpack_require__.h = () => ("dad22291cf7eea2aa816")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.fe35c45003ad4afb6e89.hot-update.js.map