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
        console.log("heheheruher");
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
/******/ 	__webpack_require__.h = () => ("27e4678978209257a2cd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.94e5b5882e5ff7991e5a.hot-update.js.map