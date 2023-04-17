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
/******/ 	__webpack_require__.h = () => ("a9a3f6f9cbaf76ad3ea2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1fc05b2d931d673d600b.hot-update.js.map