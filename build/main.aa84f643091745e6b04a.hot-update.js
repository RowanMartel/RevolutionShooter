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
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
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
        this.heads = [];
        for (let index = 0; index < Constants_1.MAX_AMMO; index++)
            this.heads.push(new Head_1.Head(this.stage, this.assetManager, this));
        this.ammo = 0;
        this.ammoText = new createjs.BitmapText(Player.TITLE + this.ammo.toString(), assetManager.getSpriteSheet("glyphs"));
        this.ammoText.letterSpacing = 1;
        this.ammoText.x = 15;
        this.ammoText.y = 65;
        this.ammoText.scaleX = 1.5;
        this.ammoText.scaleY = 1.5;
        this.lifeMarkers = [];
        for (let index = 0; index < Constants_1.MAX_LIVES; index++) {
            this.lifeMarkers.push(this.assetManager.getSprite("sprites", "Guillotine/Idle"));
            this.stage.addChild(this.lifeMarkers[index]);
            this.lifeMarkers[index].y = Constants_1.STAGE_HEIGHT - 33;
            this.lifeMarkers[index].x = 24 * index + 15;
        }
        this.reset();
        stage.addChild(this.sprite);
        stage.addChild(this.hitBox);
    }
    getEnemyManager(enemyManager) {
        this.enemyManager = enemyManager;
        for (let index = 0; index < this.heads.length; index++)
            this.heads[index].getEnemyManager(enemyManager);
    }
    reset() {
        this.hitBox.visible = false;
        this.canFire = true;
        this.inIFrames = false;
        this.sprite.x = Constants_1.STAGE_WIDTH / 2 - 35;
        this.sprite.y = Constants_1.STAGE_HEIGHT * 0.8;
        this.speed = Constants_1.PLAYER_SPEED;
        this.ammo = Constants_1.STARTING_AMMO;
        this.lives = Constants_1.STARTING_LIVES;
        this.sprite.gotoAndStop("Guillotine/IdlePrisoner");
        this.ammoText.text = Player.TITLE + this.ammo.toString();
        for (let index = 0; index < Constants_1.MAX_LIVES; index++) {
            if (index >= Constants_1.STARTING_LIVES - 1)
                this.lifeMarkers[index].visible = false;
            else
                this.lifeMarkers[index].visible = true;
        }
    }
    update() {
        if (this.inputManager.leftPressed) {
            if (this.inputManager.upPressed)
                this.move(Player.LEFT, Player.UP);
            else if (this.inputManager.downPressed)
                this.move(Player.LEFT, Player.DOWN);
            else
                this.move(Player.LEFT);
        }
        else if (this.inputManager.rightPressed) {
            if (this.inputManager.upPressed)
                this.move(Player.RIGHT, Player.UP);
            else if (this.inputManager.downPressed)
                this.move(Player.RIGHT, Player.DOWN);
            else
                this.move(Player.RIGHT);
        }
        else if (this.inputManager.upPressed) {
            if (this.inputManager.leftPressed)
                this.move(Player.UP, Player.LEFT);
            else if (this.inputManager.rightPressed)
                this.move(Player.UP, Player.RIGHT);
            else
                this.move(Player.UP);
        }
        else if (this.inputManager.downPressed) {
            if (this.inputManager.leftPressed)
                this.move(Player.DOWN, Player.LEFT);
            else if (this.inputManager.rightPressed)
                this.move(Player.DOWN, Player.RIGHT);
            else
                this.move(Player.DOWN);
        }
        if (this.isHit())
            this.damage();
        this.hitboxMove();
        this.updateHitboxVisibility();
        if (this.inputManager.spacePressed)
            this.fire();
        for (let index = 0; index < this.heads.length; index++) {
            this.heads[index].update();
        }
    }
    updateHitboxVisibility() {
        if (this.inputManager.shiftPressed)
            this.hitBox.visible = true;
        else
            this.hitBox.visible = false;
    }
    hitboxMove() {
        this.hitBox.x = this.sprite.x;
        this.hitBox.y = this.sprite.y;
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
        if (this.lives <= 0) {
            (0, Game_1.gameOver)();
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
    get Sprite() {
        return this.sprite;
    }
    get HitBox() {
        return this.hitBox;
    }
    move(direction1, direction2 = 0) {
        let speed;
        if (this.inputManager.shiftPressed)
            speed = this.speed / 2;
        else
            speed = this.speed;
        switch (direction1) {
            case Player.LEFT:
                if (direction2 == Player.UP) {
                    this.sprite.x -= speed * 0.707;
                    this.sprite.y -= speed * 0.707;
                }
                else if (direction2 == Player.DOWN) {
                    this.sprite.x -= speed * 0.707;
                    this.sprite.y += speed * 0.707;
                }
                else
                    this.sprite.x -= speed;
                break;
            case Player.RIGHT:
                if (direction2 == Player.UP) {
                    this.sprite.x += speed * 0.707;
                    this.sprite.y -= speed * 0.707;
                }
                else if (direction2 == Player.DOWN) {
                    this.sprite.x += speed * 0.707;
                    this.sprite.y += speed * 0.707;
                }
                else
                    this.sprite.x += speed;
                break;
            case Player.UP:
                if (direction2 == Player.LEFT) {
                    this.sprite.x -= speed * 0.707;
                    this.sprite.y -= speed * 0.707;
                }
                if (direction2 == Player.RIGHT) {
                    this.sprite.x += speed * 0.707;
                    this.sprite.y -= speed * 0.707;
                }
                else
                    this.sprite.y -= speed;
                break;
            case Player.DOWN:
                if (direction2 == Player.LEFT) {
                    this.sprite.x -= speed * 0.707;
                    this.sprite.y += speed * 0.707;
                }
                if (direction2 == Player.RIGHT) {
                    this.sprite.x += speed * 0.707;
                    this.sprite.y += speed * 0.707;
                }
                else
                    this.sprite.y += speed;
                break;
        }
        this.clampPos();
    }
    clampPos() {
        if (this.sprite.x < 15)
            this.sprite.x = 15;
        else if (this.sprite.x > Constants_1.STAGE_WIDTH - 20)
            this.sprite.x = Constants_1.STAGE_WIDTH - 20;
        if (this.sprite.y < 25)
            this.sprite.y = 25;
        else if (this.sprite.y > Constants_1.STAGE_HEIGHT - 30)
            this.sprite.y = Constants_1.STAGE_HEIGHT - 30;
    }
    fire() {
        if (!this.canFire || this.ammo <= 0)
            return;
        this.ammo--;
        this.ammoText.text = Player.TITLE + this.ammo.toString();
        for (let index = 0; index < this.heads.length; index++) {
            if (this.heads[index].Available) {
                this.heads[index].fire();
                break;
            }
        }
        this.canFire = false;
        setTimeout(() => {
            this.canFire = true;
        }, 500);
        this.sprite.gotoAndPlay("Guillotine/ChopHead");
        this.sprite.on("animationend", () => {
            if (this.ammo > 0)
                this.sprite.gotoAndStop("Guillotine/IdlePrisoner");
            else
                this.sprite.gotoAndStop("Guillotine/Idle");
        }, this, true);
    }
    getAmmo() {
        if (this.ammo < Constants_1.MAX_AMMO)
            this.ammo++;
        this.ammoText.text = Player.TITLE + this.ammo.toString();
        if (this.sprite.currentAnimation != "Guillotine/ChopHead") {
            if (this.ammo > 0)
                this.sprite.gotoAndStop("Guillotine/IdlePrisoner");
            else
                this.sprite.gotoAndStop("Guillotine/Idle");
        }
    }
    getLife() {
        this.lifeMarkers[this.lives - 1].visible = true;
        this.lives++;
    }
    ammoGoToFront() {
        this.stage.addChild(this.ammoText);
    }
}
exports.Player = Player;
Player.LEFT = 1;
Player.RIGHT = 2;
Player.UP = 3;
Player.DOWN = 4;
Player.X = 1;
Player.Y = 2;
Player.TITLE = "AMMO- ";


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("786d653694574ff39ded")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.aa84f643091745e6b04a.hot-update.js.map