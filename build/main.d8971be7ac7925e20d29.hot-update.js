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
        this.angle = Math.atan2(this.player.Sprite.y - this.sprite.y, this.player.Sprite.x - this.sprite.x);
        console.log(this.angle);
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
/******/ 	__webpack_require__.h = () => ("d2cfee633f3825bc20d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d8971be7ac7925e20d29.hot-update.js.map