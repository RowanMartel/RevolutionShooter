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
        this.sprite.scaleX = 5;
        this.sprite.scaleY = 5;
        stage.addChild(this.sprite);
    }
    reset() {
        this.active = false;
        this.sprite.visible = false;
        this.sprite.x = this.enemy.Sprite.x;
        this.sprite.y = this.enemy.Sprite.y;
        console.log(this.angle);
    }
    get Active() {
        return this.active;
    }
    fire() {
        this.sprite.x = this.enemy.Sprite.x;
        this.sprite.y = this.enemy.Sprite.y;
        this.angle = Math.atan2(this.player.Sprite.y - this.sprite.y, this.player.Sprite.x - this.sprite.x);
        this.active = true;
        this.sprite.x = this.enemy.Sprite.x;
        this.sprite.y = this.enemy.Sprite.y;
        this.sprite.visible = true;
    }
    update() {
        if (!this.active)
            return;
        this.sprite.x += 3 * Math.cos(this.angle);
        this.sprite.y += 3 * Math.sin(this.angle);
    }
}
exports.Bullet = Bullet;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("411be92e4ebf1f9cf4cd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.06d47e351fc12967db02.hot-update.js.map