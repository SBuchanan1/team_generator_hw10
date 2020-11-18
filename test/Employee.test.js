const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Rick";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testerVal = 100;
  const e = new Employee("Morty", testerVal);
  expect(e.id).toBe(testerVal);
});

test("Can set email via constructor argument", () => {
  const testerVal = "test@test.com";
  const e = new Employee("Morty", 1, testerVal);
  expect(e.email).toBe(testerVal);
});

test("Can get name via getName()", () => {
  const testerVal = "Rick";
  const e = new Employee(testerVal);
  expect(e.getName()).toBe(testerVal);
});

test("Can get id via getId()", () => {
  const testerVal = 100;
  const e = new Employee("Morty", testerVal);
  expect(e.getId()).toBe(testerVal);
});

test("Can get email via getEmail()", () => {
  const testerVal = "test@test.com";
  const e = new Employee("Morty", 1, testerVal);
  expect(e.getEmail()).toBe(testerVal);
});

test("getRole() should return \"Employee\"", () => {
  const testerVal = "Employee";
  const e = new Employee("Rick", 1, "test@test.com");
  expect(e.getRole()).toBe(testerVal);
});
