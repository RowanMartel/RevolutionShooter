"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Head_1 = __webpack_require__(/*! ./Head */ "./src/Head.ts");
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class Player {
    constructor(stage, assetManager, inputManager) {
        this.hitBox = assetManager.getSprite("sprites", "Misc/Hitbox");
        this.hitBox.scaleX = 4;
        this.hitBox.scaleY = 4;
        this.inputManager = inputManager;
        this.assetManager = assetManager;
        this.stage = stage;
        this.sprite = assetManager.getSprite("sprites", "Guillotine/Idle");
        this.sprite.scaleX = 2;
        this.sprite.scaleY = 2;
        this.reset();
        stage.addChild(this.sprite);
        stage.addChild(this.hitBox);
    }
    getEnemyManager(enemyManager) {
        this.enemyManager = enemyManager;
    }
    reset() {
        this.inIFrames = false;
        this.sprite.x = Constants_1.STAGE_WIDTH / 2 - 35;
        this.sprite.y = Constants_1.STAGE_HEIGHT * 0.8;
        this.speed = Constants_1.PLAYER_SPEED;
        this.ammo = Constants_1.STARTING_AMMO;
        this.lives = Constants_1.STARTING_LIVES;
        this.heads = [];
        for (let index = 0; index < Constants_1.MAX_AMMO; index++)
            this.heads.push(new Head_1.Head(this.stage, this.assetManager));
        this.lifeMarkers = [];
        for (let index = 0; index < Constants_1.MAX_LIVES; index++) {
            this.lifeMarkers.push(this.assetManager.getSprite("sprites", "Guillotine/Idle"));
            this.stage.addChild(this.lifeMarkers[index]);
            this.lifeMarkers[index].y = Constants_1.STAGE_HEIGHT - 33;
            this.lifeMarkers[index].x = 24 * index - 5;
            if (index >= Constants_1.STARTING_LIVES - 1)
                this.lifeMarkers[index].visible = false;
        }
    }
    update() {
        if (this.inputManager.leftPressed)
            this.move(Player.LEFT);
        else if (this.inputManager.rightPressed)
            this.move(Player.RIGHT);
        if (this.inputManager.upPressed)
            this.move(Player.UP);
        else if (this.inputManager.downPressed)
            this.move(Player.DOWN);
        if (this.isHit())
            this.damage();
        this.hitboxMove();
    }
    updateHitboxVisibility() {
        if (this.inputManager.shiftPressed)
            this.hitBox.visible = true;
        else
            this.hitBox.visible = false;
    }
    hitboxMove() {
        this.hitBox.x = this.sprite.x + 24;
        this.hitBox.y = this.sprite.y + 20;
    }
    isHit() {
        let bullets = this.enemyManager.getBullets();
        for (let index = 0; index < bullets.length; index++) {
            if ((0, Toolkit_1.boxHitTransformed)(this.hitBox, bullets[index].Sprite))
                return true;
        }
        return false;
    }
    damage() {
        if (this.inIFrames)
            return;
        if (this.lives > 1)
            this.lifeMarkers[this.lives - 2].visible = false;
        this.lives--;
        if (this.lives == 0) {
            this.gameOver();
            return;
        }
        this.enterIFrames();
    }
    enterIFrames() {
        this.inIFrames = true;
        let flashes = 0;
        this.sprite.visible = false;
        let flashInterval = setInterval(() => {
            if (flashes == 5) {
                clearInterval(flashInterval);
                this.inIFrames = false;
                return;
            }
            if (this.sprite.visible)
                this.sprite.visible = false;
            else
                this.sprite.visible = true;
            flashes++;
        }, 300);
    }
    gameOver() {
    }
    get Sprite() {
        return this.sprite;
    }
    get HitBox() {
        return this.hitBox;
    }
    move(direction) {
        switch (direction) {
            case Player.LEFT:
                this.sprite.x -= this.speed;
                break;
            case Player.RIGHT:
                this.sprite.x += this.speed;
                break;
        }
        switch (direction) {
            case Player.UP:
                this.sprite.y -= this.speed;
                break;
            case Player.DOWN:
                this.sprite.y += this.speed;
                break;
        }
        this.clampPos();
    }
    clampPos() {
        if (this.sprite.x < -10)
            this.sprite.x = -10;
        else if (this.sprite.x > Constants_1.STAGE_WIDTH - 50)
            this.sprite.x = Constants_1.STAGE_WIDTH - 50;
        if (this.sprite.y < 0)
            this.sprite.y = 0;
        else if (this.sprite.y > Constants_1.STAGE_HEIGHT - 60)
            this.sprite.y = Constants_1.STAGE_HEIGHT - 60;
    }
}
exports.Player = Player;
Player.LEFT = 1;
Player.RIGHT = 2;
Player.UP = 3;
Player.DOWN = 4;
Player.X = 1;
Player.Y = 2;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2f3dd10c3204037be029")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.656dc506bc21a52cfffc.hot-update.js.map