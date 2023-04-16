"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Head.ts":
/*!*********************!*\
  !*** ./src/Head.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Head = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Head {
    constructor(stage, assetManager, player) {
        this.player = player;
        this.stage = stage;
        this.assetManager = assetManager;
        this.sprite = assetManager.getSprite("sprites", "Misc/Head");
        this.sprite.scaleX = 2;
        this.sprite.scaleY = 2;
        stage.addChild(this.sprite);
        this.reset();
    }
    reset() {
        this.available = true;
        this.sprite.visible = false;
    }
    fire() {
        this.sprite.x = this.player.Sprite.x;
        this.sprite.y = this.player.Sprite.y;
        this.available = false;
        this.sprite.visible = true;
    }
    get Available() {
        return this.available;
    }
    update() {
        if (this.available)
            return;
        this.sprite.y -= 12;
        this.checkHit();
        this.checkBounds();
    }
    checkBounds() {
        if (this.sprite.y < -5)
            this.reset();
    }
    checkHit() {
        let enemies = this.enemyManager.Enemies;
        for (let index = 0; index < enemies.length; index++) {
            if (enemies[index].Active && (0, Toolkit_1.boxHitTransformed)(this.sprite, enemies[index].Sprite)) {
                this.reset();
                enemies[index].die();
                break;
            }
        }
    }
    getEnemyManager(enemyManager) {
        this.enemyManager = enemyManager;
    }
}
exports.Head = Head;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d26d72ae02583519657c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.909e179d33d104e9a9c3.hot-update.js.map