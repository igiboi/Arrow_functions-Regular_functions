'use strict';

const luigi = {
  firstName: 'luigi',
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`)
  },
};
luigi.greet(); // returns Hey Undefined due to "this" not being defined 


// Regular functions with "this" keyword
const Mary = {
  firstName: 'Mary',

  greet: function() { 
    console.log(`Hi ${this.firstName}`);
  },
};

Mary.greet(); // returns Hi Mary 
