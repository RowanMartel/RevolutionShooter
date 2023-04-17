"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/Button.ts":
/*!***********************!*\
  !*** ./src/Button.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Button = void 0;
const Constants_1 = __webpack_require__(/*! ./Constants */ "./src/Constants.ts");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
class Button {
    constructor(stage, assetManager, restart) {
        if (restart) {
            this.button1 = "Misc/PlayUnpressed";
            this.button2 = "Misc/PlayPressed";
        }
        else {
            this.button1 = "Misc/ResetUnpressed";
            this.button2 = "Misc/ResetPressed";
        }
        this.sprite = assetManager.getSprite("sprites", this.button1);
        this.sprite.visible = false;
        this.sprite.x = Constants_1.STAGE_WIDTH / 2;
        if (restart) {
            this.sprite.y = Constants_1.STAGE_HEIGHT / 2;
        }
        else {
            this.sprite.y = Constants_1.STAGE_HEIGHT / 3;
        }
        stage.addChild(this.sprite);
        this.sprite.on("click", () => {
            this.sprite.gotoAndStop(this.button1);
            this.sprite.visible = false;
            (0, Game_1.reset)();
        });
        this.sprite.on("mouseout", () => this.sprite.gotoAndStop(this.button1));
        this.sprite.on("mousedown", () => this.sprite.gotoAndStop(this.button2));
    }
    enable() {
        this.sprite.visible = true;
    }
}
exports.Button = Button;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a0fe254fbd48337f4c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1fa90c58649375b26a9c.hot-update.js.map