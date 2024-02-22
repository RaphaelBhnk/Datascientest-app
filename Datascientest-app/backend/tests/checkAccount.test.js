const checkAccount = require("./../shared/checkAccount");
var accounts = [
  { mail: "a@gmail.com", password: "Test123" },
  { mail: "b@gmail.com", password: "Test123" },
  { mail: "c@gmail.com", password: "Test123" },
];

// Tests basiques

// console.log(checkAccount("a@gmail.com", "Test123465", accounts));
// console.log(checkAccount("test@gmail.com", "Test123", accounts));
// console.log(checkAccount("c@gmail.com", "Test123", accounts));

// console.log(checkAccount("a@gmail.com", "Test123465", accounts) === false);
// console.log(checkAccount("test@gmail.com", "Test123", accounts) === false);
// console.log(checkAccount("c@gmail.com", "Test123", accounts) === true);

test("Should return false when the account is false", () => {
  expect(checkAccount("adc@gmail.com", "Test123465", accounts)).toBe(false);
});
test("Should return false when the password is wrong", () => {
  expect(checkAccount("a@gmail.com", "Test123465", accounts)).toBe(false);
});
test("should return false when the mail is wrong", () => {
  expect(checkAccount("test@gmail.com", "Test123", accounts)).toBe(false);
});
