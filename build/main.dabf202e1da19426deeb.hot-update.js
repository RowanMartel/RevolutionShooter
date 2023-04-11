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
    constructor(stage, assetManager, player) {
        this.stage = stage;
        this.assetManager = assetManager;
        this.player = player;
    }
    reset() {
        this.active = false;
    }
    get Active() {
        return this.active;
    }
    fire() {
        this.active = true;
    }
}
exports.Bullet = Bullet;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f1b4d1e5a091bacfa7fc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.dabf202e1da19426deeb.hot-update.js.map