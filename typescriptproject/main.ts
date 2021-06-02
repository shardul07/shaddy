import basicPhone = require("./BasicPhone");
import smartPhone = require("./SmartPhone");

let b = new basicPhone.BasicPhone(1,'Samsung Guru',8000,'Basic');
b.printMobileDetails()

let s = new smartPhone.SmartPhone(1,'OnePlus',39999,'Smart');
s.printMobileDetails()