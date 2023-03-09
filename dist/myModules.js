"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = exports.PI = void 0;
// export 
const PI = 3.1416;
exports.PI = PI;
// export
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}
exports.generateRandomNumber = generateRandomNumber;
