const { keys, drop } = require("lodash");

_ = {
  clamp: function (number, min, max) {
    let lowerValue = Math.max(number, min);
    let clampedValue = Math.min(lowerValue, max);
    return clampedValue;
  },

  inRange: function (number, start, end = 0) {
    let isInRange;
    if (start > end) {
      const tempStart = start;
      start = end;
      end = tempStart;
    }
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (number >= start && number < end) {
      isInRange = true;
    } else {
      isInRange = false;
    }
    return isInRange;
  },

  words: function (string) {
    return string.split(" ");
  },

  pad: function (string, length) {
    if (string.length < length) {
      let leftLen = Math.floor(length - string.length) / 2;
      let rightLen;
      if (leftLen % 2 !== 0) {
        rightLen = leftLen + 1;
      } else {
        rightLen = leftLen;
      }
      return `${" ".repeat(leftLen)}${string}${" ".repeat(rightLen)}`;
    } else {
      return string;
    }
  },

  has: function (object, key) {
    return key in object ? true : false;
  },

  invert: function (object) {
    const invertedObj = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObj[originalValue] = key;
    }
    return invertedObj;
  },

  findKey: function (object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },

  drop: function (arr, n = 1) {
    return arr.slice(n);
  },

  dropWhile: function (arr, predicate) {
    dropNum = arr.findIndex((element, index) => {
      return !predicate(element, index, arr);
    });
    const droppedArr = this.drop(arr, dropNum);
    return droppedArr;
  },

  chunk: function (arr, size = 1) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      let arrChunk = arr.slice(i, i + size);
      newArr.push(arrChunk);
    }
    return newArr;
  },
};
// Do not write or modify code below this line.
module.exports = _;
