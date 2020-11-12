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
  const testValue = 100;
  const peach = new Employee("Morty", testValue);
  expect(peach.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const peach = new Employee("Morty", 1, testValue);
  expect(peach.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Rick";
  const peach = new Employee(testValue);
  expect(peach.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const peach = new Employee("Morty", testValue);
  expect(peach.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const peach = new Employee("Morty", 1, testValue);
  expect(peach.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const peach = new Employee("Rick", 1, "test@test.com");
  expect(peach.getRole()).toBe(testValue);
});
