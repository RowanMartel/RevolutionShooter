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
    constructor(stage, assetManager, player, enemyManager) {
        this.enemyManager = enemyManager;
        this.stage = stage;
        this.assetManager = assetManager;
        this.bullets = [];
        for (let index = 0; index < Constants_1.ENEMY_BULLETS; index++)
            this.bullets.push(new Bullet_1.Bullet(stage, assetManager, player, this));
    }
    reset() {
        this.canFire = true;
        this.active = false;
        this.sprite.visible = false;
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
        for (let index = 0; index < this.bullets.length; index++)
            this.bullets[index].update();
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
        if (!this.canFire)
            return;
        for (let index = 0; index < this.bullets.length; index++) {
            if (!this.bullets[index].Active) {
                this.bullets[index].fire();
                this.sprite.gotoAndPlay(this.firingSprite);
                this.sprite.on("animationend", () => {
                    this.sprite.gotoAndStop(this.idleSprite);
                }, this, true);
                this.canFire = false;
                setTimeout(() => {
                    this.canFire = true;
                }, 2000);
                return;
            }
        }
    }
    get Sprite() {
        return this.sprite;
    }
    get Active() {
        return this.active;
    }
    getBullets() {
        return this.bullets;
    }
    die() {
        this.enemyManager.spawnFlag(this.sprite.x, this.sprite.y);
        this.reset();
    }
    activate() {
        this.reset();
        this.sprite.visible = true;
        this.active = true;
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
/******/ 	__webpack_require__.h = () => ("9b974a308c85814d2fd7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.12000960cc0adc7ca815.hot-update.js.map