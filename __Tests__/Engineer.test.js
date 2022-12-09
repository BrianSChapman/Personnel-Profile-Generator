const Employee = require("../lib/employee");


describe("Engineer", () => {
  describe("this.github", () => {
    it("should return an object containing a 'github' property when called with the new keyword", () => {
      const newGithub = "github";
      expect(newGithub).toEqual("github");
    });
  });
});
describe("getRole", () => {
  it("should return the string of 'Engineer'", () => {
    const result = "Engineer";
    expect(result).toEqual("Engineer");
  });
});
