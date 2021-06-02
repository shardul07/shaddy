"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(mobileId, mobileName, mobileCost) {
        this.mobileId = mobileId;
        this.mobileName = mobileName;
        this.mobileCost = mobileCost;
    }
    Mobile.prototype.printMobileDetails = function () {
        console.log("This is mobile");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
