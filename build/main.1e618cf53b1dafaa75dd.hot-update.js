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
    constructor(stage, assetManager) {
        this.sprite = assetManager.getSprite("sprites", "Guillotine/Idle");
        this.sprite.x = Constants_1.STAGE_WIDTH / 2;
        this.sprite.y = Constants_1.STAGE_HEIGHT * 0.8;
        this.sprite.scaleX = 2;
        this.sprite.scaleY = 2;
        stage.addChild(this.sprite);
        this.ammo = [];
        for (let index = 0; index < Constants_1.HEAD_POOL; index++)
            this.ammo.push(new Head_1.Head(stage, assetManager));
    }
    update() {
    }
}
exports.Player = Player;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3d293836453d17c38ba8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1e618cf53b1dafaa75dd.hot-update.js.map