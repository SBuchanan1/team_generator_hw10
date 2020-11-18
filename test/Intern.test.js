const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testerVal = "Tuskegee University";
  const e = new Intern("Morty", 1, "test@test.com", testerVal);
  expect(e.school).toBe(testerVal);
});

test("getRole() should return \"Intern\"", () => {
  const testerVal = "Intern";
  const e = new Intern("Morty", 1, "test@test.com", "Tuskegee University");
  expect(e.getRole()).toBe(testerVal);
});

test("Can get school via getSchool()", () => {
  const testerVal = "Tuskegee University";
  const e = new Intern("Morty", 1, "test@test.com", testerVal);
  expect(e.getSchool()).toBe(testerVal);
});
