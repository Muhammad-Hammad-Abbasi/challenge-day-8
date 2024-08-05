"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePerimeter = exports.calculateArea = void 0;
function calculateArea(height, width) {
    return height * width;
}
exports.calculateArea = calculateArea;
;
function calculatePerimeter(height, width) {
    return 2 * (height + width);
}
exports.calculatePerimeter = calculatePerimeter;
;
