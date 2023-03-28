"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Background.ts":
/*!***************************!*\
  !*** ./src/Background.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Background = void 0;
class Background {
    constructor(assetManager, stage) {
        this.sprites = ["Background"];
        this.sprite1 = assetManager.getSprite("background", "Background1");
        this.sprite2 = assetManager.getSprite("background", "Background2");
        stage.addChild(this.sprite1);
        stage.addChild(this.sprite2);
        this.reset();
    }
    reset() {
        this.sprite1.x = 0;
        this.sprite1.y = 0;
        this.sprite2.x = 0;
        this.sprite2.y = -480;
        this.sprite1.gotoAndStop(this.sprites[Math.floor(Math.random() * this.sprites.length)]);
        this.sprite2.gotoAndStop(this.sprites[Math.floor(Math.random() * this.sprites.length)]);
    }
    update() {
        this.sprite1.y += 24;
        this.sprite2.y += 24;
        if (this.sprite1.y >= 480)
            this.goToTop(this.sprite1);
        else if (this.sprite2.y >= 480)
            this.goToTop(this.sprite2);
    }
    goToTop(sprite) {
        sprite.y = -480;
        sprite.gotoAndStop(this.sprites[Math.floor(Math.random() * this.sprites.length)]);
        console.log(sprite.currentAnimation);
    }
}
exports.Background = Background;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45d42d403c4b8c274270")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.51b073992f3328010e5c.hot-update.js.map