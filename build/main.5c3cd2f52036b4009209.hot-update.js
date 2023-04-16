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
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
const WhiteFlag_1 = __webpack_require__(/*! ./WhiteFlag */ "./src/WhiteFlag.ts");
class EnemyManager {
    constructor(stage, assetManager, score, player) {
        this.stage = stage;
        this.assetManager = assetManager;
        this.score = score;
        this.player = player;
        this.flags = [];
        for (let index = 0; index < Constants_1.FLAG_POOL; index++)
            this.flags.push(new WhiteFlag_1.WhiteFlag(stage, assetManager, player));
        this.reset();
    }
    reset() {
        this.enemies = [];
        for (let index = 0; index < Constants_1.ENEMY_POOL; index++) {
            this.enemies[index] = this.determineEnemy();
        }
        this.enemies[0].activate();
    }
    determineEnemy() {
        switch (this.score.KillCount) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                return new BasicEnemy_1.BasicEnemy(this.stage, this.assetManager, this.player, this, this.score);
                break;
            default:
                return new BasicEnemy_1.BasicEnemy(this.stage, this.assetManager, this.player, this, this.score);
                break;
        }
    }
    update() {
        for (let index = 0; index < this.enemies.length; index++) {
            this.enemies[index].update();
        }
        for (let index = 0; index < this.flags.length; index++) {
            this.flags[index].update();
        }
        this.spawnEnemy();
    }
    spawnEnemy() {
        if ((0, Toolkit_1.randomMe)(1, 200) > 198 - (this.score.KillCount + 1)) {
            for (let index = 0; index < this.enemies.length; index++) {
                if (!this.enemies[index].Active) {
                    this.enemies[index].activate();
                    break;
                }
            }
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
    get Enemies() {
        return this.enemies;
    }
    spawnFlag(x, y) {
        for (let index = 0; index < this.flags.length; index++) {
            if (this.flags[index].Available) {
                this.flags[index].activate(x, y);
                break;
            }
        }
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
/******/ 	__webpack_require__.h = () => ("886a3e61a0e56664db0c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5c3cd2f52036b4009209.hot-update.js.map