
/**
 * @param {string} s
 * @return {number}
 */


const romanToInt = function(s) {
    const romanToInt = {
        "I" : {
            value : 1,
            precedence : 7
        },
        "V" : {value : 5,
        precedence : 6},
        "X" : {
          value : 10,
          precedence : 5
      },
        "L" : {
          value : 50,
          precedence : 4
      },
        "C" : {
          value : 100,
          precedence : 3
      },
        "D" : {
          value : 500,
          precedence : 2
      },
        "M" : {
          value : 1000,
          precedence : 1
      },
    }  
    let integerValue = 0;
    const romanNum = [...s];
    let currentPrecedence = 0;
    let prevValue = 0;
    let prevPrecedence = 0;
    romanNum.forEach(roman => {
  
      const value = romanToInt[roman].value;
      currentPrecedence = romanToInt[roman].precedence;
      if(!integerValue && !prevValue && !prevPrecedence){
          integerValue = integerValue + value;
          prevPrecedence = currentPrecedence;
          prevValue = value;
          return;
      }
     
      if(prevPrecedence <= currentPrecedence){
          integerValue = integerValue + value;
          prevPrecedence = currentPrecedence;
          prevValue = value;
      }
      else if(prevPrecedence > currentPrecedence){
          integerValue = integerValue + value - (2 * (prevValue));
          prevPrecedence = currentPrecedence;
          prevValue = value;
      }
    });
    return integerValue;
  };
  

romanToInt("LVIII");
/*

[M,C,M,X,C,I,V]
M :
value : 1000
precedenece : 1
prevPrecedenece : 1
prevValue : 1
integerValue : 1000

C :
value : 100
precedence : 3


M :
value : 1000
precedenece : 1

*/