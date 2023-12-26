console.log(13 * 27)

//private variables lesson below
(function () {
    // This is a private variable.
    var privateVar = "This is a private variable.";

    // This function can access the private variable.
    function privateFunction() {
      console.log(privateVar);
    }

    // This function cannot access the private variable.
    function publicFunction() {
      console.log(privateVar); // This will throw an error.
    }

  })();

  