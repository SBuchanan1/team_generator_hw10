const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testerVal = "Tuskegee University";
  const peach = new Intern("Morty", 1, "test@test.com", testerVal);
  expect(peach.school).toBe(testerVal);
});

test("getRole() should return \"Intern\"", () => {
  const testerVal = "Intern";
  const peach = new Intern("Morty", 1, "test@test.com", "Tuskegee University");
  expect(peach.getRole()).toBe(testerVal);
});

test("Can get school via getSchool()", () => {
  const testerVal = "Tuskegee University";
  const peach = new Intern("Morty", 1, "test@test.com", testerVal);
  expect(peach.getSchool()).toBe(testerVal);
});
