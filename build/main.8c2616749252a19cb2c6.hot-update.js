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
const WhiteFlag_1 = __webpack_require__(/*! ./WhiteFlag */ "./src/WhiteFlag.ts");
class EnemyManager {
    constructor(stage, assetManager, score, player) {
        this.stage = stage;
        this.assetManager = assetManager;
        this.score = score;
        this.player = player;
        for (let index = 0; index < Constants_1.FLAG_POOL; index++)
            this.flags.push(new WhiteFlag_1.WhiteFlag(stage, assetManager, player));
        this.reset();
    }
    reset() {
        this.enemies = [];
        for (let index = 0; index < Constants_1.ENEMY_POOL; index++) {
            this.enemies[index] = this.determineEnemy();
            this.enemies[index].activate();
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
    get Enemies() {
        return this.enemies;
    }
}
exports.EnemyManager = EnemyManager;
EnemyManager.enemyTypes = {
    basic: 0,
    tough: 1,
    horse: 2,
    royal: 3
};


/***/ }),

/***/ "./src/WhiteFlag.ts":
/*!**************************!*\
  !*** ./src/WhiteFlag.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WhiteFlag = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class WhiteFlag {
    constructor(stage, assetManager, player) {
        this.player = player;
        this.assetManager = assetManager;
        this.stage = stage;
        this.sprite = assetManager.getSprite("sprites", "Misc/WhiteFlag");
        stage.addChild(this.sprite);
        this.reset();
    }
    reset() {
        this.available = true;
        this.sprite.visible = false;
    }
    activate(x, y) {
        this.available = false;
        this.sprite.visible = true;
        this.sprite.x = x;
        this.sprite.y = y;
    }
    update() {
        if (this.available)
            return;
        this.sprite.y -= 5;
        this.collectCheck();
    }
    collectCheck() {
        if ((0, Toolkit_1.boxHitTransformed)(this.sprite, this.player.Sprite)) {
            this.player.getAmmo();
            this.reset();
        }
    }
}
exports.WhiteFlag = WhiteFlag;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f55f6727b818efc5ffd6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8c2616749252a19cb2c6.hot-update.js.map