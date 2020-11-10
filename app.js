'use strict';

const luigi = {
  firstName: 'luigi',
  year: 1994,
  calcAge: function () {
   // console.log(this);
    console.log(2037 - this.year);

    // Pre ES6 solution 
    // const self = this; // self or that 
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996)
    // };
    // isMillenial();

    // ES6 solution Arrows
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996)
    };
    isMillenial(); // "this" works because it is using the parent scope as Luigi with the arrow functions

  },

  greet: () => {
    //console.log(`Hey ${this.firstName}`)
  },
};
luigi.greet(); // returns Hey Undefined due to "this" not being defined 


// Regular functions with "this" keyword
// const Mary = {
//   firstName: 'Mary',

//   greet: function() { 
//     console.log(`Hi ${this.firstName}`);
//   },
// };

// Mary.greet(); // returns Hi Mary 
luigi.calcAge();