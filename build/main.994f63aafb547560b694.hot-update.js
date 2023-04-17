"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Buttons.ts":
/*!************************!*\
  !*** ./src/Buttons.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Buttons = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
class Buttons {
    constructor(assetManager, stage) {
        this.assetManager = assetManager;
        this.stage = stage;
        this.sprite = assetManager.getSprite("sprites", "Misc/PlayUnpressed");
        this.sprite.x = Constants_1.STAGE_WIDTH / 2;
        this.sprite.y = Constants_1.STAGE_HEIGHT / 2;
        console.log(this.sprite.currentAnimation);
        stage.addChild(this.sprite);
    }
    startGame() {
    }
    gameOver() {
    }
}
exports.Buttons = Buttons;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("109992c7f0c4c697a849")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.994f63aafb547560b694.hot-update.js.map