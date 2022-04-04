let numArray = [1, 2, 3, 4, 5, 6];

const findEven = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
const findOdd = (num) => {
  if (num % 2 != 0) {
    return true;
  } else {
    return false;
  }
};
// let resultArray = numArray.map(findEven);
// console.log(resultArray);

// let resultArray2 = numArray.filter(findOdd);
// console.log(resultArray2);

// const result1 = numArray.map((num) => num % 2 == 0);
// console.log(result1);
console.log("Arrow functions");
// const result2 = numArray.filter((num) => num % 2 == 0);
// console.log(result2);

const result3 = numArray.filter((num) => num % 2 != 0);
console.log(result3);
