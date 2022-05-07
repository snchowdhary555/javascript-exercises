const removeFromArray = function (arr, ...val) {
  for (let item of val) {
    if (arr.includes(item)) {
      arr.splice(arr.indexOf(item), 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
