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
    constructor(stage, assetManager, player, enemyManager) {
        super(stage, assetManager, player, enemyManager);
        this.sprite = assetManager.getSprite("sprites", "Enemies/RoyalistIdle");
        this.sprite.scaleX = 3;
        this.sprite.scaleY = 3;
        this.speed = (0, Toolkit_1.randomMe)(3, 5);
        this.idleSprite = "Enemies/RoyalistIdle";
        this.firingSprite = "Enemies/RoyalistFiring";
        this.reset();
        this.stage.addChild(this.sprite);
        for (let index = 0; index < this.bullets.length; index++) {
            this.bullets[index].reset();
        }
    }
}
exports.BasicEnemy = BasicEnemy;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("37c85e73bed7dcf8778a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7bc14822c40267a656ba.hot-update.js.map