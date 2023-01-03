// Problem 1  :
  function counter(){
  var counter = 0;

  function IncreaseCounter() {
      return counter += 1;
  };

  return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// Problem 2 :
let count = 0;
      (function () {
      if (count === 0) {
        let count = 1;
        console.log(count); // What is logged?
        }
        console.log(count); // What is logged?
      })();

// Problem 3 :
for (var i = 0; i < 2; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

// Problem 4 :
function OutFunc() {
  let  l = 10;
  function InFunc() {
      let w = 2;
      let area = l * w;
      console.log(area);
  }
  return InFunc;
}
let innerFunc = OutFunc();
innerFunc();

// Problem 5 :
function outerFunction(){
  let x = 0;
  function innerFunction(){
    return  x += 1;
  }
  return innerFunction;
}
let result = outerFunction();
console.log(result());


// Problem 6 :
// Print Output
var a = 12;
(function () {
  alert(a);
})();


// Problem 7 :
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

// Problem 8 :
var globalVar = "xyz";
(function outerFunc(outerArg) {
  var outerVar = 'a';
  (function innerFunc(innerArg) {
    var innerVar = 'b';
    console.log(
  "outerArg = " + outerArg + "\n" +
  "innerArg = " + innerArg + "\n" +
  "outerVar = " + outerVar + "\n" +
  "innerVar = " + innerVar + "\n" +
  "globalVar = " + globalVar);
})(456);
})(123);