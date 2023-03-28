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
        this.shuffleSprites();
    }
    shuffleSprites() {
        let pointer = this.sprites.length, temp, index;
        while (pointer) {
            index = Math.floor(Math.random() * pointer--);
            temp = this.sprites[pointer];
            this.sprites[pointer] = this.sprites[index];
            this.sprites[index] = temp;
        }
    }
    update() {
        this.sprite1.y += 2;
        this.sprite2.y += 2;
        console.log(this.sprite1.y + " " + this.sprite2.y);
        if (this.sprite1.y >= 480)
            this.sprite1.y = -480;
        else if (this.sprite2.y >= 480)
            this.sprite2.y = -480;
    }
}
exports.Background = Background;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4a5f7ad3940d602ba4cd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a272fc99c24c149c2103.hot-update.js.map