"use strict";
exports.__esModule = true;
exports.LibreriaMobiles = exports.Mobile = void 0;
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
    Mobile.prototype.getName = function () {
        console.log(this.name);
    };
    Mobile.prototype.setName = function (string) {
        this.name = string;
    };
    Mobile.prototype.getModel = function () {
        console.log(this.model);
    };
    Mobile.prototype.setModel = function (string) {
        this.model = string;
    };
    Mobile.prototype.getTrademark = function () {
        console.log(this.trademark);
    };
    Mobile.prototype.setTrademark = function (string) {
        this.trademark = string;
    };
    Mobile.prototype.getSdsize = function () {
        console.log(this.sdSize);
    };
    Mobile.prototype.setSdsize = function (number) {
        this.sdSize = number;
    };
    Mobile.prototype.getColor = function () {
        console.log(this.color);
    };
    Mobile.prototype.setColor = function (string) {
        this.color = string;
    };
    Mobile.prototype.getIs5g = function () {
        console.log(this.is5G);
    };
    Mobile.prototype.setIs5g = function (boolean) {
        this.is5G = boolean;
    };
    Mobile.prototype.getNumberOfCameras = function () {
        console.log(this.numberOfCameras);
    };
    Mobile.prototype.setNumberOfCameras = function (number) {
        this.numberOfCameras = number;
    };
    Mobile.prototype.getPrice = function () {
        console.log(this.price);
    };
    Mobile.prototype.setPrice = function (number) {
        this.price = number;
    };
    Mobile.prototype.printAll = function () {
        console.log("The characteristics of the mobile " + this.name + " are:");
        console.log("Name " + ": " + this.name + "\n" + "Model " + ": " + this.model + "\n" + "Trademark " + ": " + this.trademark + "\n" + "Sd Size (GB) " + ": " + this.sdSize + "\n" + "Color " + ": " + this.color + "\n" + "IS 5G? " + ": " + this.is5G + "\n" + "Number Of Cameras " + ": " + this.numberOfCameras + "\n");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
var LibreriaMobiles = /** @class */ (function () {
    function LibreriaMobiles(mobiles) {
        this.mobiles = mobiles;
    }
    LibreriaMobiles.prototype.printAll = function () {
        console.log("The characteristics of the mobile are:");
        for (var x = 0; x < this.mobiles.length; x++) {
            console.log(this.mobiles[x]);
        }
    };
    return LibreriaMobiles;
}());
exports.LibreriaMobiles = LibreriaMobiles;
