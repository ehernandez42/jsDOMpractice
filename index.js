let phoneCheck = document.getElementById("phone-check").value;

//once getting the value, now you have to feed phoneCheck into the function
//function runs, you call back the function
//you write a variable that returns true or false message to the user(i'm thinking alert box)

function telephoneCheck(num){
    let result = false;
    const patterns = [
    /^\d{3}-\d{3}-\d{4}/,
  /^\d{10}$/,
  /^\d{3}\s\d{3}\s\d{4}/,
  /^\(\d{3}\)\d{3}-\d{4}/,
  /^1\(\d{3}\)\d{3}-\d{4}/,
  /^1\s\(\d{3}\)\s\d{3}-\d{4}/,
  /^1\s\d{3}\s\d{3}\s\d{4}/,
  /^1\s\d{3}-\d{3}-\d{4}/
  ]
  
  result = patterns.some(reg => reg.test(num))
  return result;
  }
  
  telephoneCheck("1 555 555 5555")
