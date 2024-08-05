"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle = /** @class */ (function () {
    function circle(name, area) {
        this.name = name;
        this.area = area;
    }
    circle.prototype.calculateArea = function () {
        throw new Error("Method not implemented.");
    };
    return circle;
}());
;
var results = new circle("Hammad", "korangi");
console.log("Name: ".concat(results.name));
console.log("Area: ".concat(results.area));
