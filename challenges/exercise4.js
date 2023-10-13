export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  if (nums.indexOf(n) !== -1 && nums.indexOf(n) !== nums.length - 1) {
    return nums[nums.indexOf(n) + 1];
  } else {
    return null;
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let ones = 0;
  let zeros = 0;
  for (const char of str) {
    if (char === "1") {
      ones += 1;
    } else if (char === "0") {
      zeros += 1;
    }
  }
  return { 1: ones, 0: zeros };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sumArrs = 0;
	arrs.forEach((arr) => {
    arr.forEach((elem) => (sumArrs += elem));
  });
  return sumArrs;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
	const firstItem = arr[0];
  const lastItem = arr[arr.length - 1];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arr[i] = lastItem;
    } else if (i === arr.length - 1) {
      arr[i] = firstItem;
    }
  }
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
