"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Head.ts":
/*!*********************!*\
  !*** ./src/Head.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Head = void 0;
class Head {
    constructor(stage, assetManager, player) {
        this.player = player;
        this.stage = stage;
        this.assetManager = assetManager;
        this.sprite = assetManager.getSprite("sprites", "Misc/Head");
        stage.addChild(this.sprite);
        this.reset();
    }
    reset() {
        this.available = true;
    }
    fire() {
        this.sprite.x = this.player.Sprite.x;
        this.sprite.y = this.player.Sprite.y;
        this.available = false;
    }
}
exports.Head = Head;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d127aaf467484b185a5e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1f8409e27d8a5f03d26b.hot-update.js.map