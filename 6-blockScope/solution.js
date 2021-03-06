'use strict';
    // This variable `a` should be accessible outside of the block scope.
    var a = 5;
    
    // This variable `b` should not be reassignable.
    const b = process.argv[2];
    
    if (a === 5) {
      let c = 4;
      console.log(c);  // 4
      const b = 8;
      console.log(b); // 8
    }    
    console.log(a); // 5
    console.log(b);
    try {
      c = 1000;
    } catch (e) {
      console.log(e);
    }
