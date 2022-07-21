"use strict";
exports.__esModule = true;
exports.MobileLibrary = exports.Mobile = void 0;
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
        return this.price;
    };
    Mobile.prototype.getPrice2 = function () {
        return this.price;
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
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(mobiles, name, location, totalPrice) {
        this.mobiles = mobiles;
        this.name = name;
        this.location = location;
        this.totalPrice = totalPrice;
    }
    MobileLibrary.prototype.getName = function () {
        console.log(this.name);
    };
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.getLocation = function () {
        console.log(this.location);
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        console.log(this.mobiles);
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var totalPrice = 0;
        for (var x = 0; x < this.mobiles.length; x++) {
            totalPrice = totalPrice + this.mobiles[x].getPrice2();
        }
        return totalPrice;
    };
    MobileLibrary.prototype.printAll = function () {
        console.log("The characteristics of the mobiles are:");
        for (var x = 0; x < this.mobiles.length; x++) {
            console.log(this.mobiles[x]);
        }
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
