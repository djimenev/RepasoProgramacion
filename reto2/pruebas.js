"use strict";
exports.__esModule = true;
var repaso2_1 = require("./repaso2");
var repaso2_2 = require("./repaso2");
var Nokia3210 = new repaso2_1.Mobile("nokia", "3210", "notengoniidea", 0, "red", false, 1, 150);
var Iphone3g = new repaso2_1.Mobile("iphone", "3g", "sigosintenerniidea", 100, "black", true, 4, 800);
var samnsgunggalaxy10 = new repaso2_1.Mobile("samnsung", "galaxy s10", "nizorra", 128, "white", true, 3, 700);
var arrayObt = new repaso2_2.MobileLibrary([Nokia3210, Iphone3g, samnsgunggalaxy10], "libreria1", "Gijon", 0);
console.log(arrayObt.totalPriceCalculation());
