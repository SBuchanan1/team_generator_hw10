const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testerVal = 100;
  const peach = new Manager("Morty", 1, "test@test.com", testerVal);
  expect(peach.officeNumber).toBe(testerVal);
});

test('getRole() should return "Manager"', () => {
  const testerVal = "Manager";
  const peach = new Manager("Morty", 1, "test@test.com", 100);
  expect(peach.getRole()).toBe(testerVal);
});

test("Can get office number via getOffice()", () => {
  const testerVal = 100;
  const peach = new Manager("Morty", 1, "test@test.com", testerVal);
  expect(peach.getOfficeNumber()).toBe(testerVal);
});
