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
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class BasicEnemy extends Enemy_1.Enemy {
    constructor(stage, assetManager, player) {
        super(stage, assetManager, player);
        this.sprite = assetManager.getSprite("sprites", "Enemies/RoyalistIdle");
        this.sprite.scaleX = 3;
        this.sprite.scaleY = 3;
        this.speed = (0, Toolkit_1.randomMe)(3, 5);
        this.idleSprite = "RoyalistIdle";
        this.firingSprite = "RoyalistFiring";
        this.reset();
        this.stage.addChild(this.sprite);
        this.bullet.reset();
    }
}
exports.BasicEnemy = BasicEnemy;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f71c7ba8f8564836181b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b6ee311a43e6d7cf4699.hot-update.js.map