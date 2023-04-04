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
        this.sprite.scaleX = 4;
        this.sprite.scaleY = 4;
        stage.addChild(this.sprite);
    }
}
exports.BasicEnemy = BasicEnemy;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d0453bbbb082c88f4467")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7cba24a8daba99fa5edc.hot-update.js.map