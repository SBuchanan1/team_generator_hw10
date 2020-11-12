const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const peach = new Employee();
  expect(typeof (peach)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Rick";
  const peach = new Employee(name);
  expect(peach.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testerVal = 100;
  const peach = new Employee("Morty", testerVal);
  expect(peach.id).toBe(testerVal);
});

test("Can set email via constructor argument", () => {
  const testerVal = "test@test.com";
  const peach = new Employee("Morty", 1, testerVal);
  expect(peach.email).toBe(testerVal);
});

test("Can get name via getName()", () => {
  const testerVal = "Rick";
  const peach = new Employee(testerVal);
  expect(peach.getName()).toBe(testerVal);
});

test("Can get id via getId()", () => {
  const testerVal = 100;
  const peach = new Employee("Morty", testerVal);
  expect(peach.getId()).toBe(testerVal);
});

test("Can get email via getEmail()", () => {
  const testerVal = "test@test.com";
  const peach = new Employee("Morty", 1, testerVal);
  expect(peach.getEmail()).toBe(testerVal);
});

test("getRole() should return \"Employee\"", () => {
  const testerVal = "Employee";
  const peach = new Employee("Rick", 1, "test@test.com");
  expect(peach.getRole()).toBe(testerVal);
});
