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
            case "A":
            case "ArrowLeft":
                this.leftPressed = true;
                this.rightPressed = false;
                break;
            case "d":
            case "D":
            case "ArrowRight":
                this.rightPressed = true;
                this.leftPressed = false;
                break;
            case "w":
            case "W":
            case "ArrowUp":
                this.upPressed = true;
                this.downPressed = false;
                break;
            case "s":
            case "S":
            case "ArrowDown":
                this.downPressed = true;
                this.upPressed = false;
                break;
            case "Shift":
                this.shiftPressed = true;
                break;
            case " ":
                this.spacePressed = true;
                break;
        }
    }
    keyLogUp(keyEvent) {
        switch (keyEvent.key) {
            case "a":
            case "A":
            case "ArrowLeft":
                this.leftPressed = false;
                break;
            case "d":
            case "D":
            case "ArrowRight":
                this.rightPressed = false;
                break;
            case "w":
            case "W":
            case "ArrowUp":
                this.upPressed = false;
                break;
            case "s":
            case "S":
            case "ArrowDown":
                this.downPressed = false;
                break;
            case "Shift":
                this.shiftPressed = false;
                break;
            case " ":
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
/******/ 	__webpack_require__.h = () => ("06fae1f839e44294ded6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.f659c767d17b3cd4ee9a.hot-update.js.map