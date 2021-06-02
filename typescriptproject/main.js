"use strict";
exports.__esModule = true;
var basicPhone = require("./BasicPhone");
var smartPhone = require("./SmartPhone");
var b = new basicPhone.BasicPhone(1, 'Samsung Guru', 8000, 'Basic');
b.printMobileDetails();
var s = new smartPhone.SmartPhone(1, 'OnePlus', 39999, 'Smart');
s.printMobileDetails();
