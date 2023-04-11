"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bullet.ts":
/*!***********************!*\
  !*** ./src/Bullet.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bullet = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Bullet {
    constructor(stage, assetManager, player, enemy) {
        this.stage = stage;
        this.assetManager = assetManager;
        this.player = player;
        this.enemy = enemy;
        this.sprite = assetManager.getSprite("sprites", "Misc/Bullet");
        this.sprite.scaleX = 5;
        this.sprite.scaleY = 5;
        stage.addChild(this.sprite);
    }
    reset() {
        this.active = false;
        this.sprite.visible = false;
        this.sprite.x = this.enemy.Sprite.x;
        this.sprite.y = this.enemy.Sprite.y;
    }
    get Active() {
        return this.active;
    }
    fire() {
        this.sprite.x = this.enemy.Sprite.x;
        this.sprite.y = this.enemy.Sprite.y;
        this.angle = Math.atan2(this.player.Sprite.y + 50 - this.sprite.y, this.player.Sprite.x + 30 - this.sprite.x);
        this.active = true;
        this.sprite.x = this.enemy.Sprite.x;
        this.sprite.y = this.enemy.Sprite.y;
        this.sprite.visible = true;
    }
    update() {
        if (!this.active)
            return;
        this.sprite.x += 5 * Math.cos(this.angle);
        this.sprite.y += 5 * Math.sin(this.angle);
        this.rangeCheck();
    }
    rangeCheck() {
        if (this.sprite.x < 0)
            this.reset();
        else if (this.sprite.x > Constants_1.STAGE_WIDTH)
            this.reset();
        if (this.sprite.y < 0)
            this.reset();
        else if (this.sprite.y > Constants_1.STAGE_HEIGHT)
            this.reset();
    }
}
exports.Bullet = Bullet;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("15fdb550a720c77724ae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.22bb04b07fae348af7f8.hot-update.js.map