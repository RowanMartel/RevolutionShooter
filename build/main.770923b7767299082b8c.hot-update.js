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
        this.inputManager = inputManager;
        this.assetManager = assetManager;
        this.stage = stage;
        this.sprite = assetManager.getSprite("sprites", "Guillotine/Idle");
        this.sprite.scaleX = 2;
        this.sprite.scaleY = 2;
        this.reset();
        stage.addChild(this.sprite);
    }
    getEnemyManager(enemyManager) {
        this.enemyManager = enemyManager;
    }
    reset() {
        this.sprite.x = Constants_1.STAGE_WIDTH / 2 - 35;
        this.sprite.y = Constants_1.STAGE_HEIGHT * 0.8;
        this.speed = Constants_1.PLAYER_SPEED;
        this.ammo = Constants_1.STARTING_AMMO;
        this.lives = Constants_1.STARTING_LIVES;
        this.heads = [];
        for (let index = 0; index < Constants_1.MAX_AMMO; index++)
            this.heads.push(new Head_1.Head(this.stage, this.assetManager));
        this.liveMarkers = [];
        for (let index = 0; index < Constants_1.MAX_LIVES; index++) {
            this.liveMarkers.push(this.assetManager.getSprite("sprites", "Guillotine/Idle"));
            this.stage.addChild(this.liveMarkers[index]);
            this.liveMarkers[index].y = Constants_1.STAGE_HEIGHT - 33;
            this.liveMarkers[index].x = 24 * index - 5;
            if (index >= Constants_1.STARTING_LIVES)
                this.liveMarkers[index].visible = false;
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
    }
    isHit() {
        let bullets = this.enemyManager.getBullets();
        for (let index = 0; index < bullets.length; index++) {
            if ((0, Toolkit_1.radiusHit)(this.sprite, 10, bullets[index].Sprite, 1))
                return true;
        }
        return false;
    }
    damage() {
    }
    get Sprite() {
        return this.sprite;
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
/******/ 	__webpack_require__.h = () => ("c7ba60f6b236508e3b0c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.770923b7767299082b8c.hot-update.js.map