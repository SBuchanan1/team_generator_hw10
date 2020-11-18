const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testerVal = "GitHubUser";
  const e = new Engineer("Morty", 1, "test@test.com", testerVal);
  expect(e.github).toBe(testerVal);
});

test("getRole() should return \"Engineer\"", () => {
  const testerVal = "Engineer";
  const e = new Engineer("Morty", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testerVal);
});

test("Can get GitHub username via getGithub()", () => {
  const testerVal = "GitHubUser";
  const e = new Engineer("Morty", 1, "test@test.com", testerVal);
  expect(e.getGithub()).toBe(testerVal);
});
