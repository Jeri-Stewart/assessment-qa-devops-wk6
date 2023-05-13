const shuffle = require("../src/shuffle");

const arguement = ["maltipoo", "Yorkie", "Boxer", "Poodle"];

describe("shuffle should...", () => {
  test("return an array", () => {
    let result = shuffle();
    expect(Array.isArray(result)).toBe(true);
  });

  test("return an array of the same length as the argument sent in", () => {
    let shuffledArr = shuffle(arguement);
    expect(shuffledArr.length).toBe(arguement.length);
  });
});
