export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let SquaresNums = nums.map((item) => item * item);
  return SquaresNums;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let wordsCamelCase = [];
  wordsCamelCase.push(words[0].charAt(0).toLowerCase() + words[0].slice(1));
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    wordsCamelCase.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return wordsCamelCase.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let SubjectsNun = 0;
  for (const key in people) {
    SubjectsNun += people[key].subjects.length;
  }
  return SubjectsNun;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
