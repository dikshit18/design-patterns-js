//Using traditional syntax
function Identity(name, identityId) {
  this.name = name;
  this.identityId = identityId;

  //This method is always redefined for every object
  this.printIdentityDetails = function() {
    console.log(
      `The user with the name ${this.name} has an identity Id - ${this.identityId}`
    );
  };
}

//ES6 Class Syntax
class Identity {
  constructor(name, identityId) {
    this.name = name;
    this.identityId = identityId;
  }
  printIdentityDetails() {
    console.log(
      `The user with the name ${this.name} has an identity Id - ${this.identityId}`
    );
  }
}

/*
The keyword new tells Javascript that ConstructorObject should behave like a constructor.
One of the drawbacks of this pattern is that it does not support inheritance. 
A property shared among different objects will always be repeated
*/

//new operator creates a empty object {} under the hood and returns this from the method Idenity.
const identityOne = new Identity(
  "Dikshit",
  "9b821a30-4fac-445f-94c2-e2081d762bbc"
);
const identitySecond = new Identity(
  "Sarah",
  "58279c5d-758d-47e9-a9d2-0fa778ff9cb9"
);

identityOne.printIdentityDetails();
identitySecond.printIdentityDetails();
