/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var temp,
    rev = 0,
    y = Math.abs(x);

  while (y != 0) {
    temp = y % 10;
    y = Math.floor(y / 10);
    rev = rev * 10 + temp;
  }
  rev = x < 0 ? rev * -1 : rev;

  // 2,147,483,647.
  //−2,147,483,648
  if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return rev;
  }
};

var reverse1 = function(x) {
  var count = 0;
  var ans = Math.abs(x);
  while (ans > 0) {
    ans = Math.floor(ans / 10);
    count++;
  }
  var sum = 0;
  ans = Math.abs(x);
  for (var i = count - 1; i >= 0; i--) {
    sum += (ans % 10) * Math.pow(10, i);
    ans = Math.floor(ans / 10);
  }
  sum = x < 0 ? sum * -1 : sum;
  if (sum > Math.pow(-2, 31) && sum < Math.pow(2, 31) - 1) {
    return sum;
  } else {
    return 0;
  }
};

// console.log(reverse(1534236469));

console.log("32-bit Integer :", Math.pow(2, 31) - 1); // 2,147,483,647
console.log("    7463847412 :", reverse(7463847412));
console.log("    8463847412 :", reverse(8463847412)); // overflow

console.log("32-bit Integer :", Math.pow(-2, 31)); //−2,147,483,648
console.log("   -8463847412 :", reverse(-8463847412));
console.log("   -9463847412 :", reverse(-9463847412)); // overflow
