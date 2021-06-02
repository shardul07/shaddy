var Car = /** @class */ (function () {
    function Car(x) {
        this.engine = x;
    }
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
var car = new Car("XXSY1");
console.log(car.engine);
car.disp();
