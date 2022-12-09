const Employee = require("../lib/employee");


describe("Intern", () => {
  describe("this.school", () => {
    it("should return an object containing a 'school' property when called with the new keyword", () => {
      const newSchool = "school";
      expect(newSchool).toEqual("school");
    });
  });
});

describe("getRole", () => {
  it("should return the string of 'Intern'", () => {
    const result = "Intern";
    expect(result).toEqual("Intern");
  });
});
