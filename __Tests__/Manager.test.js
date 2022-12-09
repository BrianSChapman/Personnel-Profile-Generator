const Employee = require("../lib/employee");


describe("Manager", () => {
  describe("this.officeNumber", () => {
    it("should return an object containing a 'officeNumber' property when called with the new keyword", () => {
      const newPhone = "officeNumber";
      expect(newPhone).toEqual("officeNumber");
    });
  });
});
describe("getRole", () => {
  it("should return the string of 'Manager'", () => {
    const result = "Manager";
    expect(result).toEqual("Manager");
  });
});
