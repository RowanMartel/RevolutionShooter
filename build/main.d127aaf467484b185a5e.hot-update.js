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
        this.sprite.visible = false;
    }
    fire() {
        this.sprite.x = this.player.Sprite.x;
        this.sprite.y = this.player.Sprite.y;
        this.available = false;
        this.sprite.visible = true;
    }
    get Available() {
        return this.available;
    }
}
exports.Head = Head;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89d79e7ddda44fbe06eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d127aaf467484b185a5e.hot-update.js.map