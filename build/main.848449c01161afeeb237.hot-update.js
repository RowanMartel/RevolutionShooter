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
    reset() {
        this.sprite.x = Constants_1.STAGE_WIDTH / 2;
        this.sprite.y = Constants_1.STAGE_HEIGHT * 0.8;
        this.ammo = [];
        for (let index = 0; index < Constants_1.HEAD_POOL; index++)
            this.ammo.push(new Head_1.Head(this.stage, this.assetManager));
        this.speed = Constants_1.PLAYER_SPEED;
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
    }
    getPos(position) {
        switch (position) {
            case Player.X:
                return this.sprite.x;
            case Player.Y:
                return this.sprite.y;
            default:
                return 0;
        }
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
        else if (this.sprite.y > Constants_1.STAGE_HEIGHT - 45)
            this.sprite.y = Constants_1.STAGE_HEIGHT - 50;
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
/******/ 	__webpack_require__.h = () => ("cabb4f47851301b948ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.848449c01161afeeb237.hot-update.js.map