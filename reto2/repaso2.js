"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSize, color, is5G, numberOfCameras, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.numberOfCameras = numberOfCameras;
        this.price = price;
    }
    Mobile.prototype.printAll = function () {
        for (var atributos in this) {
            console.log(atributos + " : " + this[atributos]);
        }
    };
    return Mobile;
}());
exports.Mobile = Mobile;
