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
    }
    reset() {
        this.sprite1.x = 0;
        this.sprite1.y = 480;
        this.sprite2.x = 0;
        this.sprite2.y = 960;
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
        this.sprite1.y--;
        this.sprite2.y--;
        if (this.sprite1.y = 0)
            this.sprite1.y = 960;
        else if (this.sprite2.y = 0)
            this.sprite2.y = 960;
    }
}
exports.Background = Background;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("783700c373429e4030f7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.9e85fbbbbd977611e204.hot-update.js.map