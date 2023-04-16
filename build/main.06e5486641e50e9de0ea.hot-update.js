"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Enemy.ts":
/*!**********************!*\
  !*** ./src/Enemy.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
const Bullet_1 = __webpack_require__(/*! ./Bullet */ "./src/Bullet.ts");
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Enemy {
    constructor(stage, assetManager, player) {
        this.stage = stage;
        this.assetManager = assetManager;
        this.bullet = new Bullet_1.Bullet(stage, assetManager, player, this);
    }
    reset() {
        this.canFire = true;
        this.active = true;
        this.sprite.visible = true;
        ;
        this.sprite.x = this.getRandomX();
        this.sprite.y = -50;
        this.targetX = this.getRandomX();
        this.targetY = this.getRandomY();
        this.state = Enemy.STATE_MOVING;
        this.sprite.gotoAndStop(this.idleSprite);
    }
    getRandomX() {
        let x = Math.random() * Constants_1.STAGE_WIDTH;
        if (x < 10)
            x = 10;
        if (x > Constants_1.STAGE_WIDTH - 10)
            x = 10;
        return x;
    }
    getRandomY() {
        let y = 0;
        while (y < Constants_1.STAGE_HEIGHT / 5) {
            y = Constants_1.STAGE_HEIGHT / 4;
            y = Math.random() * (Constants_1.STAGE_HEIGHT / 4);
        }
        return y;
    }
    update() {
        this.bullet.update();
        if (!this.active)
            return;
        if (this.state == Enemy.STATE_MOVING)
            this.move();
        else if (this.state == Enemy.STATE_ATTACKING)
            this.attack();
    }
    move() {
        if (this.state != Enemy.STATE_MOVING)
            return;
        if (this.sprite.x == this.targetX && this.sprite.y == this.targetY)
            return;
        this.angle = Math.atan2(this.targetY - this.sprite.y, this.targetX - this.sprite.x);
        if (Math.sqrt(Math.pow(this.targetY - this.sprite.y, 2) + Math.pow(this.targetX - this.sprite.x, 2)) < this.speed * 20) {
            this.state = Enemy.STATE_ATTACKING;
            return;
        }
        this.sprite.x += this.speed * Math.cos(this.angle);
        this.sprite.y += this.speed * Math.sin(this.angle);
    }
    attack() {
        if (!this.bullet.Active && this.canFire) {
            this.bullet.fire();
            this.sprite.gotoAndPlay(this.firingSprite);
            this.sprite.on("animationend", () => {
                this.sprite.gotoAndStop(this.idleSprite);
            }, this, true);
            this.canFire = false;
            setTimeout(() => {
                this.canFire = true;
            }, 500);
        }
    }
    get Sprite() {
        return this.sprite;
    }
    getBullets() {
        return this.bullet;
    }
}
exports.Enemy = Enemy;
Enemy.STATE_MOVING = 0;
Enemy.STATE_ATTACKING = 1;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("94efff5d00b8a050132f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.06e5486641e50e9de0ea.hot-update.js.map