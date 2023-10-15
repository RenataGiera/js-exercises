import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("it throws an error if not passed an array", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
  });

  test("returns the sum of numbers which are multiples of 3 or 5", () => {
    expect(sumMultiples([1, 3, 5])).toBe(8);
    expect(sumMultiples([3, 5, 9, 10, 15, 7])).toBe(42);
    expect(sumMultiples([3, 5, 9, 10, 15])).toBe(42);
    expect(sumMultiples([3, 7, 11, 22])).toBe(3);
  });

  test("it works okay with decimal numbers", () => {
    expect(sumMultiples([1.2, 3, 5.0])).toBe(8);
  });

  test("if there is no numbers that are multiples of 3 or 5, returns 0", () => {
    expect(sumMultiples([8, 11, 1])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("it throws an error if not passed a string", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });

  test("returns true if the string contains only characters C, G, T or A", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("CGTAAAAACCC")).toBe(true);
  });

  test("returns false if there are characters other than C, G, T, or A", () => {
    expect(isValidDNA("CGTAKBU")).toBe(false);
    expect(isValidDNA("CGTCC ATT")).toBe(false);
    expect(isValidDNA("GG!")).toBe(false);
  });

  test("the search string should not be case sensitive", () => {
    expect(isValidDNA("CGTAKbeBU")).toBe(false);
    expect(isValidDNA("cGtA")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("it throws an error if not passed a string", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });

  test("returns string where T always pairs with A, and C always pairs with G", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });
});

describe("isItPrime", () => {
  test("it throws an error if not passed a number", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");
  });

  test("returns true when n is a prime number - can only be divided evenly by 1 and itself", () => {
    expect(isItPrime([3])).toBe(true);
    expect(isItPrime([11])).toBe(true);
    expect(isItPrime([83])).toBe(true);
  });

  test("returns false when n is not a prime number", () => {
    expect(isItPrime([4])).toBe(false);
    expect(isItPrime([12])).toBe(false);
    expect(isItPrime([80])).toBe(false);
  });

  test("returns false when n = 1", () => {
    expect(isItPrime([1])).toBe(false);
  });

  test("returns false when n is a negative numbers", () => {
    expect(isItPrime([-3])).toBe(false);
    expect(isItPrime([-4])).toBe(false);
  });

  test("returns false when n is a decimal number", () => {
    expect(isItPrime([1.6])).toBe(false);
  });
});

describe("createMatrix", () => {
  test("it throws an error if not passed a number or a fill", () => {
    expect(() => {
      createMatrix();
    }).toThrow("n is required" || "fill is required");
  });
  test("return an array of n arrays, each filled with n items.", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });
});
