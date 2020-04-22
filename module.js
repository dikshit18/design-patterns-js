const Identity = firstName => {
  //Private Variable
  const identityId = "9b821a30-4fac-445f-94c2-e2081d762bbc";

  //Private Method, not exposed directly
  const getIdentityId = () => {
    console.log("Identity ID is...", identityId);
  };

  //Public Method, exposed directly
  const getFirstName = () => {
    console.log("Exposing the method for firstname...", firstName);
  };

  //Public Method, exposed directly and calling private Method and private variable
  const getIdentityIdCaller = () => {
    getIdentityId();
  };
  return {
    fName: getFirstName,
    identity: getIdentityIdCaller
  };
};

Identity("Dikshit").fName(); //Exposing the method for firstname... Dikshit
Identity("Dikshit").identity(); //Identity ID is... 9b821a30-4fac-445f-94c2-e2081d762bbc
Identity("Dikshit").getIdentityId(); //Undefined
