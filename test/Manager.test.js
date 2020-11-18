const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testerVal = 100;
  const e = new Manager("Morty", 1, "test@test.com", testerVal);
  expect(e.officeNumber).toBe(testerVal);
});

test('getRole() should return "Manager"', () => {
  const testerVal = "Manager";
  const e = new Manager("Morty", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testerVal);
});

test("Can get office number via getOffice()", () => {
  const testerVal = 100;
  const e = new Manager("Morty", 1, "test@test.com", testerVal);
  expect(e.getOfficeNumber()).toBe(testerVal);
});
