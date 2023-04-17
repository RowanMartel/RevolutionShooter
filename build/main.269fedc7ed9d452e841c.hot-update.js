"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/WhiteFlag.ts":
/*!**************************!*\
  !*** ./src/WhiteFlag.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WhiteFlag = void 0;
const Toolkit_1 = __webpack_require__(/*! ./Toolkit */ "./src/Toolkit.ts");
class WhiteFlag {
    constructor(stage, assetManager, player, score) {
        this.score = score;
        this.player = player;
        this.assetManager = assetManager;
        this.stage = stage;
        this.sprite = assetManager.getSprite("sprites", "Misc/WhiteFlag");
        this.sprite.scaleX = 3;
        this.sprite.scaleY = 3;
        stage.addChild(this.sprite);
        this.reset();
    }
    reset() {
        this.available = true;
        this.sprite.visible = false;
    }
    activate(x, y) {
        this.available = false;
        this.sprite.visible = true;
        this.sprite.x = x;
        this.sprite.y = y;
    }
    update() {
        if (this.available)
            return;
        this.sprite.y += 5;
        this.collectCheck();
    }
    collectCheck() {
        if ((0, Toolkit_1.boxHitTransformed)(this.sprite, this.player.Sprite)) {
            this.player.getAmmo();
            this.reset();
        }
    }
    get Available() {
        return this.available;
    }
}
exports.WhiteFlag = WhiteFlag;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("61ba188199021e6776a5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.269fedc7ed9d452e841c.hot-update.js.map