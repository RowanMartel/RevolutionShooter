"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Bullet.ts":
/*!***********************!*\
  !*** ./src/Bullet.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bullet = void 0;
class Bullet {
    constructor(stage, assetManager, player, enemy) {
        this.stage = stage;
        this.assetManager = assetManager;
        this.player = player;
        this.enemy = enemy;
        this.sprite = assetManager.getSprite("sprites", "Misc/Bullet");
        stage.addChild(this.sprite);
    }
    reset() {
        this.active = false;
        this.sprite.visible = false;
        this.angle = Math.atan2(this.player.Sprite.y - this.sprite.y, this.player.Sprite.x - this.sprite.x) * 180 / Math.PI;
    }
    get Active() {
        return this.active;
    }
    fire() {
        this.active = true;
        this.sprite.x = this.enemy.Sprite.x;
        this.sprite.y = this.enemy.Sprite.y;
        this.sprite.visible = true;
    }
    update() {
        if (!this.active)
            return;
        this.sprite.x += Math.cos(this.angle);
        this.sprite.y += Math.sin(this.angle);
    }
}
exports.Bullet = Bullet;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7d5a28bd3e89d0d70c5a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.03ae82156fbe0e81907d.hot-update.js.map