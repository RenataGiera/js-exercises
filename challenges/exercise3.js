export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const SmallNumsArr = [];

  nums.forEach((num) => {
    if (num < 1) {
      SmallNumsArr.push(num);
    }
  });

  return SmallNumsArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const NamesBeginningWith = [];

  names.forEach((name) => {
    if (name.charAt(0) === char) {
      NamesBeginningWith.push(name);
    }
  });

  return NamesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = [];

  words.forEach((word) => {
    if (word.slice(0, 3) === "to ") {
      verbs.push(word);
    }
  });

  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integers = [];

  nums.forEach((num) => {
    if (Number.isInteger(num)) {
      integers.push(num);
    }
  });
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
