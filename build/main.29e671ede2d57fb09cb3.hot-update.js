"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/EnemyManager.ts":
/*!*****************************!*\
  !*** ./src/EnemyManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnemyManager = void 0;
const BasicEnemy_1 = __webpack_require__(/*! ./BasicEnemy */ "./src/BasicEnemy.ts");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class EnemyManager {
    constructor(stage, assetManager, score, player) {
        this.stage = stage;
        this.assetManager = assetManager;
        this.score = score;
        this.player = player;
        this.reset();
    }
    reset() {
        this.enemies = [];
        for (let index = 0; index < Constants_1.ENEMY_POOL; index++) {
            this.enemies[index] = this.determineEnemy();
        }
    }
    determineEnemy() {
        switch (this.score.KillCount) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                return new BasicEnemy_1.BasicEnemy(this.stage, this.assetManager, this.player);
                break;
            default:
                return new BasicEnemy_1.BasicEnemy(this.stage, this.assetManager, this.player);
                break;
        }
    }
    update() {
        for (let index = 0; index < this.enemies.length; index++) {
            this.enemies[index].update();
        }
    }
    getBullets() {
        let bullets = [];
        for (let index1 = 0; index1 < this.enemies.length; index1++) {
            for (let index2 = 0; index2 < this.enemies[index2].getBullets().length; index2++) {
                let currentBullet = this.enemies[index1].getBullets()[index2];
                if (currentBullet.Active)
                    bullets.push(currentBullet);
            }
        }
        return bullets;
    }
    getEnemySprites() {
        let enemies = [];
        for (let index = 0; index < this.enemies.length; index++) {
            enemies.push(this.enemies[index].Sprite);
        }
        return enemies;
    }
}
exports.EnemyManager = EnemyManager;
EnemyManager.enemyTypes = {
    basic: 0,
    tough: 1,
    horse: 2,
    royal: 3
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("374d10a898f853442c1c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.29e671ede2d57fb09cb3.hot-update.js.map