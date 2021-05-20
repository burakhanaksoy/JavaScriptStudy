/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) {
    x = x * -1;
    return x.toFixed().split("").reverse().join("") * -1;
  } else if (x > 2 ** 31) {
    return 0;
  } else {
    return x.toFixed().split("").reverse().join("");
  }
};

console.log(reverse(321));
