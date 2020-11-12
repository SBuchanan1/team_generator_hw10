const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testerVal = "GitHubUser";
  const peach = new Engineer("Morty", 1, "test@test.com", testerVal);
  expect(peach.github).toBe(testerVal);
});

test("getRole() should return \"Engineer\"", () => {
  const testerVal = "Engineer";
  const peach = new Engineer("Morty", 1, "test@test.com", "GitHubUser");
  expect(peach.getRole()).toBe(testerVal);
});

test("Can get GitHub username via getGithub()", () => {
  const testerVal = "GitHubUser";
  const peach = new Engineer("Morty", 1, "test@test.com", testerVal);
  expect(peach.getGithub()).toBe(testerVal);
});
