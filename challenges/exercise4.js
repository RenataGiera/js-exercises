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
  // Your code here!
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
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
