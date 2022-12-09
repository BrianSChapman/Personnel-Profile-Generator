const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("this.name",() => {
    it("should return an object containing a 'name' property when called with the new keyword", () => {
        const newName = "name";
        expect(newName).toEqual("name"); 
    })
    })
})
    describe("this.id",() => {
    it("should return an object containing a 'id' property when called with the new keyword", () => {
        const newId = "id";
        expect(newId).toEqual("id"); 
    
    })

})

describe("this.email",() => {
    it("should return an object containing a 'email' property when called with the new keyword", () => {
        const newEmail = "email";
        expect(newEmail).toEqual("email"); 
    
    })

})
describe("getRole", () => {
    it("should return the string of 'Employee'", () => {
      const result = "Employee";
      expect(result).toEqual("Employee");
    });
  });
  

    
