var msg = function () { return 12 * 2; };
var foo = function () { return 12 * 2; };
var foo1 = function (x) { return 10 + x; };
var foo2 = function (x) {
    x = 10 + x;
    console.log(x);
};
console.log(msg());
console.log(msg());
console.log(foo());
console.log(foo1(100));
foo2(100);
