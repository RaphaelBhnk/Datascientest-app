const checkPassword = require("./../shared/checkPassword");

/* Tests basiques */

// console.log(checkPassword(""));
// console.log(checkPassword("aidgb"));
// console.log(checkPassword("shgsiby6sh"));
// console.log(checkPassword("6852678"));
// console.log(checkPassword("--)-shgi5"));

/* Tests basiques vérifiés */
// console.log(checkPassword("") === false);
// console.log(checkPassword("aidgb") === false);
// console.log(checkPassword("shgsiby6sh") === true);
// console.log(checkPassword("6852678") === false);
// console.log(checkPassword("--)-shgi5") === true);

/* Tests via Jest */

test("Should return false for an empty string", () => {
  expect(checkPassword("")).toBe(false);
});

test("Should return false for a string without numbers", () => {
  expect(checkPassword("aidgb")).toBe(false);
});

test("Should true false for an empty string", () => {
  expect(checkPassword("shgsiby6sh")).toBe(true);
});

test("Should return false for a string without numbers", () => {
  expect(checkPassword("6852678")).toBe(false);
});
