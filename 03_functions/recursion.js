let count = 0;

const isEven = (n) => {
  if (n === 0) return true;
  else if (n === 1) return false;
  else if (n < 0) {
    count++;
    return isEven(n + 2);
  } else {
    count++;
    return isEven(n - 2);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log('count:', count);
