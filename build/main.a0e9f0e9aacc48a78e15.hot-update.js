"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/BasicEnemy.ts":
/*!***************************!*\
  !*** ./src/BasicEnemy.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BasicEnemy = void 0;
const Enemy_1 = __webpack_require__(/*! ./Enemy */ "./src/Enemy.ts");
class BasicEnemy extends Enemy_1.Enemy {
    constructor(stage, assetManager) {
        super(stage, assetManager);
        this.sprite = assetManager.getSprite("sprites", "Enemies/RoyalistIdle");
    }
}
exports.BasicEnemy = BasicEnemy;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b48d99cfeb175f9afcb2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a0e9f0e9aacc48a78e15.hot-update.js.map