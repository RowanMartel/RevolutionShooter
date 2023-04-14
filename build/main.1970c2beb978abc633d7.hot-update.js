"use strict";
self["webpackHotUpdategame_programming_createjs_webpack"]("main",{

/***/ "./src/InputManager.ts":
/*!*****************************!*\
  !*** ./src/InputManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputManager = void 0;
class InputManager {
    constructor(stage) {
        this.leftPressed = false;
        this.rightPressed = false;
        this.upPressed = false;
        this.downPressed = false;
        this.spacePressed = false;
        this.shiftPressed = false;
        document.onkeydown = (keyEvent) => this.keyLogDown(keyEvent);
        document.onkeyup = (keyEvent) => this.keyLogUp(keyEvent);
    }
    keyLogDown(keyEvent) {
        switch (keyEvent.key) {
            case "a":
            case "ArrowLeft":
                this.leftPressed = true;
                this.rightPressed = false;
                break;
            case "d":
            case "ArrowRight":
                this.rightPressed = true;
                this.leftPressed = false;
                break;
            case "w":
            case "ArrowUp":
                this.upPressed = true;
                this.downPressed = false;
                break;
            case "s":
            case "ArrowDown":
                this.downPressed = true;
                this.upPressed = false;
                break;
            case "Alt":
                this.shiftPressed = true;
                break;
            case "space":
                this.spacePressed = true;
                break;
        }
    }
    keyLogUp(keyEvent) {
        switch (keyEvent.key) {
            case "a":
            case "ArrowLeft":
                this.leftPressed = false;
                break;
            case "d":
            case "ArrowRight":
                this.rightPressed = false;
                break;
            case "w":
            case "ArrowUp":
                this.upPressed = false;
                break;
            case "s":
            case "ArrowDown":
                this.downPressed = false;
                break;
            case "Alt":
                this.shiftPressed = false;
                break;
            case "space":
                this.spacePressed = false;
                break;
        }
    }
}
exports.InputManager = InputManager;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ec878b9fe744e399cdf0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1970c2beb978abc633d7.hot-update.js.map